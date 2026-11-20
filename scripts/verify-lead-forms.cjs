// Run: node scripts/verify-lead-forms.cjs
// Real React SSR plus isolated hook/event tests; no browser or network access.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const root = path.resolve(__dirname, "..");
const contactFile = "src/app/contacto/page.client.tsx";
const diagnosticFile = "src/app/diagnostico/page.client.tsx";
const chatFile = "src/components/ChatBot.tsx";
const fieldsFile = "src/components/LeadQualificationFields.tsx";
const allowedFiles = new Set([
  contactFile, diagnosticFile, chatFile, fieldsFile,
  "src/data/services.ts", "src/data/service-areas.ts",
].map(file => path.join(root, file)));
const reasons = ["comprar_coque", "ofrecer_coque", "logistica_coque", "otro"];
let activeHooks;

// This harness replays hooks and event handlers, not React DOM reconciliation.
const hookReact = {
  ...React,
  useState(initial) {
    const values = activeHooks.values;
    const index = activeHooks.index++;
    if (!(index in values)) values[index] = typeof initial === "function" ? initial() : initial;
    return [values[index], value => {
      values[index] = typeof value === "function" ? value(values[index]) : value;
    }];
  },
  useId() { return `test-${activeHooks.index++}`; },
};

class MockFormData extends FormData {
  constructor(fields) {
    super();
    for (const [key, value] of Object.entries(fields || {})) this.append(key, value);
  }
}

function createLoader(interactive = false) {
  const cache = new Map();
  const calls = { build: [], track: [], fetch: [] };
  const control = { mode: "success", release: undefined };
  function load(filename) {
    filename = path.resolve(root, filename);
    assert.ok(allowedFiles.has(filename), `Unexpected local import: ${filename}`);
    if (cache.has(filename)) return cache.get(filename).exports;
    const module = { exports: {} };
    cache.set(filename, module);
    let compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      fileName: filename,
      compilerOptions: {
        module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022,
        jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
      },
    }).outputText;
    // Expose the private form in memory only, leaving production exports intact.
    if (filename === path.join(root, chatFile)) compiled += "\nexports.TestChatForm = FormularioContacto;";
    function localRequire(name) {
      if (name === "react") return interactive ? hookReact : React;
      if (name === "react/jsx-runtime") return require(name);
      if (name === "framer-motion") return {
        motion: new Proxy({}, { get: (_, tag) => tag }),
        AnimatePresence: ({ children }) => children,
        useReducedMotion: () => false,
      };
      if (name === "lucide-react") return new Proxy({}, { get: () => () => null });
      if (name === "next/link") return ({ children }) => children;
      if (name === "next/image") return () => null;
      if (name === "next/navigation") return { usePathname: () => "/", useRouter: () => ({ push() {} }) };
      if (name === "@marsidev/react-turnstile") return { Turnstile: () => null };
      if (name.startsWith("@/components/") && name !== "@/components/LeadQualificationFields") return () => null;
      if (name === "@/lib/asistente") return { partirNegritas: text => [{ texto: text }] };
      if (name === "@/lib/lead-context") return {
        buildLeadPayload(data, options) {
          // Only test the declared helper contract, never load the real helper.
          const payload = {
            ...Object.fromEntries(data.entries()),
            origen_formulario: options.source,
            servicio_id: options.serviceId || data.get("servicio_id") || "",
            tema: options.topic || data.get("tema") || "",
            version_captacion: "2", submission_id: "mock-client-id",
          };
          calls.build.push({ data, options, payload });
          return payload;
        },
        trackLeadSuccess(payload, submissionId) {
          calls.track.push({ payload, submissionId });
          if (control.mode === "analytics-error") throw new Error("Mock tracking failure");
        },
      };
      if (name.startsWith("@/") || name.startsWith("./")) {
        const base = name.startsWith("@/")
          ? path.join(root, "src", name.slice(2)) : path.resolve(path.dirname(filename), name);
        const resolved = ["", ".tsx", ".ts"].map(ext => base + ext).find(file => allowedFiles.has(file));
        assert.ok(resolved, `Unexpected dependency: ${name}`);
        return load(resolved);
      }
      throw new Error(`Unmocked dependency blocked: ${name}`);
    }
    const context = vm.createContext({
      require: localRequire, module, exports: module.exports,
      process: { env: { NEXT_PUBLIC_TURNSTILE_SITE_KEY: "mock-site-key" } },
      FormData: MockFormData,
      fetch: async (url, init) => {
        assert.equal(url, "/api/submit-protocol");
        assert.equal(init.method, "POST");
        assert.equal(calls.build.length, calls.fetch.length + 1, "Build must precede POST");
        calls.fetch.push(JSON.parse(init.body));
        if (control.mode === "network-error") throw new Error("Mock network failure");
        if (control.mode === "pending") await new Promise(resolve => { control.release = resolve; });
        return { json: async () => {
          if (control.mode === "invalid-json") throw new Error("Mock JSON failure");
          return { success: control.mode !== "rejected", submission_id: "mock-server-id" };
        } };
      },
    });
    vm.runInContext(compiled, context, { filename });
    return module.exports;
  }
  return { load, calls, control };
}

function runner(Component, initialProps) {
  const values = [];
  let props = initialProps;
  return {
    render(nextProps = props) {
      props = nextProps;
      activeHooks = { values, index: 0 };
      try { return Component(props); } finally { activeHooks = undefined; }
    },
  };
}

function nodes(tree, predicate) {
  if (tree == null || typeof tree !== "object") return [];
  if (Array.isArray(tree)) return tree.flatMap(node => nodes(node, predicate));
  return [...(predicate(tree) ? [tree] : []), ...nodes(tree.props?.children, predicate)];
}
const named = (tree, name) => nodes(tree, node => node.props?.name === name);
const formOf = tree => nodes(tree, node => node.type === "form")[0];

function verifyRenderAndSelection() {
  const ssr = createLoader();
  const Fields = ssr.load(fieldsFile).default;
  const catalog = ssr.load("src/data/services.ts").services;
  const markup = renderToStaticMarkup(React.createElement(Fields));
  assert.equal((markup.match(/<optgroup /g) || []).length, 4);
  assert.equal((markup.match(/<option /g) || []).length, catalog.length + 1);
  assert.ok(!markup.includes("motivo_comercial"));
  for (const props of [
    { serviceId: "H54" }, { topic: "Coque de petróleo", compact: true },
    { serviceId: "H54", tone: "dark" },
  ]) {
    const html = renderToStaticMarkup(React.createElement(Fields, props));
    assert.ok(html.includes('name="servicio_id" value="H54"'));
    assert.ok(!html.includes("<select"));
    assert.equal((html.match(/name="motivo_comercial"/g) || []).length, 4);
    assert.equal((html.match(/required=""/g) || []).length, 4);
    assert.ok(!html.includes('checked=""'), "Never infer buyer/seller intent");
    for (const value of reasons) assert.ok(html.includes(`value="${value}"`));
  }
  assert.ok(!renderToStaticMarkup(React.createElement(Fields, { serviceId: "E01" })).includes("motivo_comercial"));
  const test = createLoader(true);
  const component = runner(test.load(fieldsFile).default, {});
  assert.equal(named(component.render(), "servicio_id")[0].props.required, undefined);
  for (const [value, count] of [["H54", 4], ["E01", 0], ["", 0]]) {
    named(component.render(), "servicio_id")[0].props.onChange({ target: { value } });
    assert.equal(named(component.render(), "motivo_comercial").length, count);
  }
  console.log(`PASS: React SSR, ${catalog.length} services, optional selection, required H54 motives, light/dark/compact and state transitions`);
  return catalog;
}

function mountScenario(scenario) {
  const test = createLoader(true);
  const exports = test.load(scenario.file);
  let sent = 0;
  const component = runner(scenario.source === "chat" ? exports.TestChatForm : exports.default,
    { ...scenario.props, onEnviado() { sent++; } });
  const form = formOf(component.render());
  assert.ok(form);
  const Fields = test.load(fieldsFile).default;
  const fieldElement = nodes(form, node => node.type === Fields)[0];
  assert.ok(fieldElement);
  assert.equal(fieldElement.props.serviceId, scenario.serviceId);
  const qualification = runner(Fields, fieldElement.props);
  if (scenario.selectId) {
    named(qualification.render(), "servicio_id")[0].props.onChange({ target: { value: scenario.selectId } });
  }
  const fieldTree = qualification.render();
  const serviceNodes = named(fieldTree, "servicio_id");
  assert.equal(serviceNodes.length, 1, "Exactly one canonical service field");
  assert.equal(named(fieldTree, "motivo_comercial").length, scenario.reason ? 4 : 0);
  const hidden = Object.fromEntries(nodes([form, fieldTree], node => node.type === "input" && node.props.type === "hidden")
    .map(node => [node.props.name, node.props.value]));
  const fields = { ...hidden, ...scenario.fields, servicio_id: serviceNodes[0].props.value };
  if (scenario.reason) fields.motivo_comercial = scenario.reason;
  assert.equal(hidden.from_name, scenario.from);
  if (scenario.source === "chat") assert.ok(hidden.subject.includes("CHAT BOT"));
  const event = { preventDefault() {}, currentTarget: fields };
  return { ...test, component, event, sent: () => sent };
}

async function main() {
  const catalog = verifyRenderAndSelection();
  const coque = catalog.find(service => service.id === "H54");
  const generation = catalog.find(service => service.id === "E01");
  const coquePage = `/servicios/${coque.area}/${coque.slug}`;
  const scenarios = [
    { name: "contact general", file: contactFile, props: {}, source: "contacto", from: "APEN Formulario de contacto", fields: { nombre: "Mock Person", empresa: "Mock Company", email: "test@example.invalid", telefono: "5555555555", "tipo-consulta": "otro", mensaje: "Consulta general" } },
    { name: "contact preselected H54", file: contactFile, props: { selectedService: { id: "H54", title: coque.title } }, source: "contacto", from: "APEN Formulario de contacto", fields: { mensaje: "Ofrezco material" }, serviceId: "H54", reason: "ofrecer_coque" },
    { name: "diagnostic selected H54", file: diagnosticFile, props: {}, source: "diagnostico", from: "APEN Diagnóstico", fields: { "nombre-empresa": "Mock Company", email: "test@example.invalid", "tipo-proyecto": "electrico", escala: "consulta", mensaje: "Proyecto simulado" }, selectId: "H54", reason: "logistica_coque" },
    { name: "chat explicit coque topic", file: chatFile, props: { tema: "Coque de petróleo", pagina: "/" }, source: "chat", from: "APEN Asistente", fields: { name: "Mock Person", phone: "5555555555", message: "Consulta" }, serviceId: "H54", reason: "comprar_coque" },
    { name: "chat exact catalog title", file: chatFile, props: { tema: coque.title, pagina: "/" }, source: "chat", from: "APEN Asistente", fields: { name: "Mock Person", phone: "5555555555", message: "Consulta" }, serviceId: "H54", reason: "otro" },
    { name: "generation from coque page", file: chatFile, props: { tema: generation.title, pagina: coquePage }, source: "chat", from: "APEN Asistente", fields: { name: "Mock Person", phone: "5555555555", message: "Consulta de generación" }, serviceId: "E01" },
  ];
  let passed = 0;
  for (const scenario of scenarios) {
    for (const mode of ["success", "rejected", "network-error", "invalid-json", "analytics-error"]) {
      const test = mountScenario(scenario);
      test.control.mode = mode;
      await formOf(test.component.render()).props.onSubmit(test.event);
      assert.equal(test.calls.fetch.length, 1);
      const { data, options } = test.calls.build[0];
      assert.ok(data instanceof MockFormData);
      assert.equal(options.source, scenario.source);
      assert.equal(options.serviceId, scenario.serviceId);
      if (scenario.source === "chat") assert.equal(options.topic, scenario.props.tema);
      const payload = test.calls.fetch[0];
      assert.equal(payload.origen_formulario, scenario.source);
      assert.equal(payload.from_name, scenario.from);
      assert.equal(payload.servicio_id, scenario.serviceId || scenario.selectId || "");
      assert.equal(payload.motivo_comercial, scenario.reason);
      assert.equal(payload.version_captacion, "2");
      const success = mode === "success" || mode === "analytics-error";
      assert.equal(test.calls.track.length, success ? 1 : 0);
      const after = test.component.render();
      assert.equal(nodes(after, node => node.props?.role === "alert").length, success ? 0 : 1);
      if (success) {
        assert.equal(test.calls.track[0].payload, test.calls.build[0].payload);
        assert.deepEqual(test.calls.track[0].payload, payload);
        assert.equal(test.calls.track[0].submissionId, "mock-server-id");
        if (scenario.source === "chat") assert.equal(test.sent(), 1);
        else assert.equal(nodes(after, node => node.props?.role === "status").length, 1);
      } else {
        assert.ok(formOf(after), "Failed submission must retain the form");
        assert.equal(test.sent(), 0);
        test.control.mode = "success";
        await formOf(after).props.onSubmit(test.event);
        assert.equal(test.calls.fetch.length, 2);
        assert.equal(test.calls.track.length, 1, "Retry tracks only confirmed success");
      }
      passed++;
      console.log(`PASS: ${scenario.name} / ${mode}`);
    }
  }
  // A route alone must not imply H54 or classify free text as a seller.
  mountScenario({ ...scenarios[5], props: { tema: null, pagina: coquePage }, serviceId: undefined,
    fields: { message: "Vendo material y necesito orientación" } });
  console.log("PASS: coque page without explicit topic leaves service optional and intent unset");
  for (const scenario of [scenarios[0], scenarios[2], scenarios[3]]) {
    const test = mountScenario(scenario);
    test.control.mode = "pending";
    const pending = formOf(test.component.render()).props.onSubmit(test.event);
    const busy = formOf(test.component.render());
    assert.equal(busy.props["aria-busy"], true);
    assert.ok(nodes(busy, node => node.type === "button" && node.props.type === "submit")[0].props.disabled);
    assert.equal(test.calls.track.length, 0, "Never track a pending request");
    await busy.props.onSubmit(test.event);
    assert.equal(test.calls.fetch.length, 1, "Ignore repeated submit while busy");
    test.control.mode = "success";
    test.control.release();
    await pending;
    assert.equal(test.calls.track.length, 1);
  }
  console.log(`PASS: ${passed} submission scenarios, retry recovery and three pending/duplicate-submit checks`);
  console.log("All lead form checks passed. Fetch/build/tracking mocked; no real POST, browser, build or helper execution.");
}

main().catch(error => { console.error(error); process.exitCode = 1; });
