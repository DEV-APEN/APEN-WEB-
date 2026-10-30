const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...rest) {
  return originalResolve.call(this, request.startsWith("@/") ? path.join(root, "src", request.slice(2)) : request, parent, ...rest);
};
require.extensions[".ts"] = (module, filename) => {
  const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  module._compile(compiled, filename);
};
const { consultations, pendingConsultations, getConsultation, consultationContactHref, getConsultationsForService } = require("../src/data/consultas.ts");
const { services, serviceHref } = require("../src/data/services.ts");
const { getMarkdownForPath, markdownRoutes } = require("../src/lib/agent-markdown.ts");
const { detailMetadata } = require("../src/lib/service-metadata.ts");
const { serviceContent } = require("../src/data/service-content.ts");
const sitemap = require("../src/app/sitemap.ts").default();
const llms = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");
const additions = consultations.filter(article => article.code.startsWith("NEW_"));
assert.equal(additions.length, 19, "19 new public consultations");
assert.equal(consultations.length, 62);
assert.equal(pendingConsultations.length, 1);
assert.equal(pendingConsultations[0].slug, "formatos-biocombustibles-2026");
assert.equal(new Set(consultations.map(article => article.slug)).size, consultations.length);
assert.equal(new Set(consultations.map(article => article.code)).size, consultations.length);
for (const article of consultations) {
  const service = services.find(service => serviceHref(service) === article.relatedService.href);
  assert.ok(service, article.slug + " must link an existing specific service");
  assert.equal(consultationContactHref(article), `/contacto?servicio=${service.id}#solicitud`);
  assert.ok(getConsultationsForService(service.id).includes(article));
}
for (const article of additions) {
  const words = article.quickAnswer.trim().split(/\s+/).length;
  assert.ok(words >= 40 && words <= 60, article.slug + " quick answer: " + words);
  assert.ok(article.sections.length >= 3 && article.faqs.length >= 3, article.slug);
  assert.ok(article.sources.length >= 2 && article.regulatoryRows.length >= 4, article.slug);
  assert.ok(!/\bTODO\s*:|\bplaceholder\b/i.test(JSON.stringify(article)), article.slug);
  assert.equal(article.datePublished, "2026-10-29");
  assert.ok(article.description.length > 80 && article.description.length < 200, article.slug);
  assert.ok(fs.existsSync(path.join(root, "public", article.visual.image)), article.visual.image);
  for (const authority of article.visual.authorities) assert.ok(fs.existsSync(path.join(root, "public", authority.logo)), authority.logo);
  for (const source of article.sources) assert.equal(new URL(source.url).protocol, "https:");
  for (const related of article.related.filter(link => link.href.startsWith("/consultas/"))) {
    assert.ok(getConsultation(related.href.slice("/consultas/".length)), related.href);
  }
  const route = "/consultas/" + article.slug;
  assert.ok(sitemap.some(entry => entry.url === "https://apen.mx" + route), route);
  assert.equal(getMarkdownForPath(route).status, 200);
  assert.ok(markdownRoutes().includes(route));
  assert.ok(llms.includes("https://apen.mx" + route), route);
}
for (const draft of pendingConsultations) {
  const route = "/consultas/" + draft.slug;
  assert.equal(getConsultation(draft.slug), undefined);
  assert.equal(getMarkdownForPath(route).status, 404);
  assert.ok(!markdownRoutes().includes(route));
  assert.ok(!sitemap.some(entry => entry.url.endsWith(route)));
  assert.ok(!llms.includes("https://apen.mx" + route));
}
for (const [id, content] of Object.entries(serviceContent)) {
  const service = services.find(service => service.id === id);
  assert.ok(service, id);
  assert.equal(detailMetadata(service).title, content.title);
  assert.equal(detailMetadata(service).description, content.description);
  assert.ok(getMarkdownForPath(serviceHref(service)).body.includes(content.steps[0]));
}
console.log("PASS: 19 nuevas + 43 existentes, 1 borrador excluido, servicios exactos, CTA contextual, respuestas, assets, fuentes, sitemap y Markdown.");

async function verifyHttp(base) {
  for (const article of additions) {
    const response = await fetch(base + "/consultas/" + article.slug);
    assert.equal(response.status, 200, article.slug);
    const html = await response.text();
    assert.ok(html.includes('rel="canonical" href="https://apen.mx/consultas/' + article.slug + '"'), article.slug + " canonical");
    assert.ok(html.includes(consultationContactHref(article)), article.slug + " contextual CTA");
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    for (const type of ["DefinedTerm", "Article", "FAQPage"]) assert.ok(schemas.some(schema => schema["@type"] === type), article.slug + " " + type);
    assert.ok(html.includes("og:title") && html.includes("twitter:card"), article.slug + " social metadata");
  }
  const draft = await fetch(base + "/consultas/formatos-biocombustibles-2026");
  assert.equal(draft.status, 404);
  console.log("PASS HTTP: 19 fichas 200, canonical, schemas, CTA y metadatos; borrador 404.");
}
if (process.env.CONSULTATION_TEST_BASE_URL) verifyHttp(process.env.CONSULTATION_TEST_BASE_URL).catch(error => { console.error(error); process.exitCode = 1; });
