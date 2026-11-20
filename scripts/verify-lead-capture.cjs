const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const vm = require("node:vm");
const ts = require("typescript");
const { webcrypto } = require("node:crypto");
const root = path.resolve(__dirname, "..");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...rest) {
  return resolve.call(this, request.startsWith("@/") ? path.join(root, "src", request.slice(2)) : request, parent, ...rest);
};
const compile = filename => ts.transpileModule(fs.readFileSync(filename, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
require.extensions[".ts"] = (module, filename) => module._compile(compile(filename), filename);
const schema = require("../src/lib/lead-schema.ts");
const valid = { nombre: "Example", email: "example@example.invalid", mensaje: "Consulta de prueba" };

function browser(consent = false, blocked = false) {
  const values = new Map();
  const events = [];
  const timers = [];
  let now = 1795100000000;
  const storage = {
    getItem: key => { if (blocked) throw Error("Storage blocked"); return values.get(key) || null; },
    setItem: (key, value) => { if (blocked) throw Error("Storage blocked"); values.set(key, value); },
  };
  if (consent) values.set("apen-cookie-consent", "true");
  const window = {
    location: new URL("https://apen.mx/consultas/registro-achilles?utm_source=linkedin&utm_medium=social&utm_campaign=noviembre&email=private@example.invalid"),
    localStorage: storage, sessionStorage: storage,
    gtag: (...args) => events.push(args),
    setTimeout: callback => { timers.push(callback); return timers.length; },
  };
  const context = vm.createContext({ exports: {}, require: () => schema, window,
    document: { referrer: "https://www.google.com/search?q=private" },
    URL, URLSearchParams, crypto: webcrypto,
    Date: class extends Date { static now() { return now; } },
  });
  vm.runInContext(compile(path.join(root, "src/lib/lead-context.ts")), context);
  return { api: context.exports, window, values, events, timers, advance: ms => { now += ms; } };
}

async function run() {
  const normalized = schema.normalizeLead({ name: " Example ", phone: "5555555555", message: "Consulta", subject: "CHAT BOT", pagina: "/contacto", "servicio-id": "H54", estado_seguimiento: "ganado" });
  assert.equal(normalized.origen_formulario, "chat");
  assert.equal(normalized.nombre, "Example");
  assert.equal(normalized.telefono, "5555555555");
  assert.equal(normalized.mensaje, "Consulta");
  assert.equal(normalized.servicio_id, "H54");
  assert.equal(normalized.estado_seguimiento, "nuevo");
  assert.equal(normalized.from_name, "APEN Asistente");
  assert.equal(schema.normalizeLead({ "nombre-empresa": "Example Company", subject: "Diagnóstico" }).empresa, "Example Company");
  assert.equal(schema.leadValidationError(normalized), undefined, "legacy H54 remains compatible");
  assert.ok(schema.leadValidationError({ ...normalized, version_captacion: "2" }));
  for (const motivo_comercial of schema.commercialIntents) {
    assert.equal(schema.leadValidationError({ ...normalized, version_captacion: "2", motivo_comercial }), undefined);
  }
  assert.ok(schema.leadValidationError({ ...valid, email: "invalid" }));
  assert.ok(schema.leadValidationError({ ...valid, telefono: "123" }));
  assert.ok(schema.leadValidationError({ ...valid, email: "" }));

  const tab = browser();
  const entry = tab.api.captureLeadContext();
  assert.equal(entry.pagina_entrada, "/consultas/registro-achilles");
  assert.equal(entry.referente_entrada, "https://www.google.com");
  assert.equal(entry.utm_source, "linkedin");
  assert.equal(tab.values.size, 0, "no persistent attribution without consent");
  tab.window.location = new URL("https://apen.mx/contacto?servicio=H54");
  const fd = new FormData();
  for (const [key, value] of Object.entries(valid)) fd.set(key, value);
  fd.set("motivo_comercial", "comprar_coque");
  const payload = tab.api.buildLeadPayload(fd, { source: "contacto", serviceId: "H54" });
  assert.equal(payload.pagina_entrada, "/consultas/registro-achilles");
  assert.equal(payload.pagina_envio, "/contacto");
  assert.equal(payload.version_captacion, "2");
  assert.match(payload.submission_id, /^[a-f0-9-]{36}$/);
  assert.ok(!JSON.stringify(payload).includes("?"));
  tab.api.trackLeadSuccess(payload);
  assert.equal(tab.events.length, 0);
  tab.values.set("apen-cookie-consent", "true");
  tab.api.captureLeadContext();
  assert.ok(tab.values.has("apen-lead-entry-v1"));
  const accepted = { ...payload, submission_id: webcrypto.randomUUID() };
  tab.api.trackLeadSuccess(accepted);
  tab.api.trackLeadSuccess(accepted);
  assert.equal(tab.events.length, 1, "one event per accepted submission ID");
  assert.equal(tab.events[0][1], "generate_lead");
  assert.deepEqual(Object.keys(tab.events[0][2]).sort(), ["form_source", "lead_intent", "service_id"]);
  assert.ok(!JSON.stringify(tab.events).includes("example.invalid"));
  tab.advance(31 * 60 * 1000);
  assert.equal(tab.api.captureLeadContext().pagina_entrada, "/contacto", "expired attribution resets");
  const blocked = browser(true, true);
  assert.doesNotThrow(() => blocked.api.buildLeadPayload(fd, { source: "chat" }));
  const unsafe = browser();
  unsafe.window.location = new URL("https://apen.mx/?utm_source=person%40example.invalid");
  assert.equal(unsafe.api.captureLeadContext().utm_source, undefined);
  const delayed = browser(true);
  delete delayed.window.gtag;
  delayed.api.trackLeadSuccess(payload);
  assert.equal(delayed.events.length, 0);
  assert.equal(delayed.timers.length, 1);
  delayed.window.gtag = (...args) => delayed.events.push(args);
  delayed.timers.shift()();
  delayed.api.trackLeadSuccess(payload);
  assert.equal(delayed.events.length, 1, "delayed tracker emits once after readiness");
  const revoked = browser(true);
  delete revoked.window.gtag;
  revoked.api.trackLeadSuccess(payload);
  revoked.values.delete("apen-cookie-consent");
  revoked.window.gtag = (...args) => revoked.events.push(args);
  revoked.timers.shift()();
  assert.equal(revoked.events.length, 0, "revoked consent clears pending events");

  // Every network request is mocked: this test must never create real leads.
  const originalFetch = global.fetch;
  const originalSecret = process.env.TURNSTILE_SECRET_KEY;
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  const calls = [];
  let captchaOk = true;
  let formOk = true;
  global.fetch = async (url, options) => {
    calls.push({ url, options });
    if (url === "https://challenges.cloudflare.com/turnstile/v0/siteverify") return Response.json({ success: captchaOk });
    assert.ok(["https://formspree.io/f/meenkedl", "https://formspree.io/f/mykojkvj"].includes(url));
    return Response.json(formOk ? { ok: true } : { errors: [{ message: "Mock rejection" }] }, { status: formOk ? 200 : 400 });
  };
  try {
    const { NextRequest } = require("next/server");
    const { POST } = require("../src/app/api/submit-protocol/route.ts");
    const post = async (fields, asForm = false) => {
      const req = new NextRequest("http://localhost/api/submit-protocol", {
        method: "POST", headers: { "content-type": asForm ? "application/x-www-form-urlencoded" : "application/json" },
        body: asForm ? new URLSearchParams(fields).toString() : JSON.stringify(fields),
      });
      const res = await POST(req);
      return { status: res.status, body: await res.json() };
    };
    const base = { ...valid, "cf-turnstile-response": "mock-token", access_key: "do-not-forward" };
    for (const source of ["contacto", "diagnostico", "chat"]) {
      const result = await post({ ...base, origen_formulario: source, servicio_id: "H54", version_captacion: "2", motivo_comercial: "ofrecer_coque" }, source === "diagnostico");
      assert.equal(result.status, 200);
      assert.equal(result.body.success, true);
      const sent = calls.at(-1);
      assert.equal(sent.url, source === "chat" ? "https://formspree.io/f/mykojkvj" : "https://formspree.io/f/meenkedl");
      const data = JSON.parse(sent.options.body);
      assert.equal(data.origen_formulario, source);
      assert.equal(data.servicio_id, "H54");
      assert.equal(data.estado_seguimiento, "nuevo");
      assert.equal(data.submission_id, result.body.submission_id);
      assert.ok(!("access_key" in data) && !("cf-turnstile-response" in data));
    }
    assert.equal((await post({ ...base, subject: "CHAT BOT", name: "Legacy" })).status, 200);
    assert.equal(calls.at(-1).url, "https://formspree.io/f/mykojkvj");
    for (const extra of [{ email: "" }, { mensaje: "" }, { servicio_id: "INVALID" }, { _gotcha: "spam" }, { servicio_id: "H54", version_captacion: "2" }]) {
      const before = calls.length;
      const result = await post({ ...base, ...extra });
      assert.equal(result.status, 400);
      assert.equal(result.body.success, false);
      assert.equal(calls.length, before, "invalid fields never forwarded");
    }
    captchaOk = false;
    const before = calls.length;
    assert.equal((await post(base)).status, 400);
    assert.equal(calls.length, before + 1, "failed captcha never reaches Formspree");
    captchaOk = true;
    formOk = false;
    assert.equal((await post(base)).body.success, false);
  } finally {
    global.fetch = originalFetch;
    if (originalSecret === undefined) delete process.env.TURNSTILE_SECRET_KEY;
    else process.env.TURNSTILE_SECRET_KEY = originalSecret;
  }
  console.log("PASS: lead aliases, validation, H54 intent, attribution/consent, success-only non-PII analytics, CAPTCHA and Formspree routing (all requests mocked).");
}
run().catch(error => { console.error(error); process.exitCode = 1; });
