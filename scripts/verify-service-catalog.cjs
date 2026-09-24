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
const { services, serviceHref, getService, getServiceCategory } = require("../src/data/services.ts");
const { serviceAreas } = require("../src/data/service-areas.ts");
const { serviceInstitutions, getServiceInstitutions } = require("../src/data/service-institutions.ts");
const { getMarkdownForPath } = require("../src/lib/agent-markdown.ts");
const { detailMetadata } = require("../src/lib/service-metadata.ts");
const sitemap = require("../src/app/sitemap.ts").default();
const expected = { hidrocarburos: 54, energia: 38, legal: 11, "financiamiento-de-proyectos": 22 };
assert.equal(services.length, 125);
assert.equal(new Set(services.map(serviceHref)).size, services.length);
assert.equal(new Set(services.map(s => s.id)).size, services.length);
for (const institution of Object.values(serviceInstitutions)) {
  assert.ok(institution.logo, institution.name + " missing logo");
  assert.ok(fs.existsSync(path.join(root, "public", institution.logo)), institution.logo);
  assert.match(institution.url, /^https:\/\//);
}
assert.ok(getServiceInstitutions(services.find(s => s.id === "H54")).some(i => i.name === "PEMEX"));
assert.ok(getServiceInstitutions(services.find(s => s.id === "E01")).some(i => i.name === "CENACE"));
for (const area of serviceAreas) {
  assert.equal(services.filter(s => s.area === area.id).length, expected[area.id]);
  assert.ok(fs.existsSync(path.join(root, "public", area.image)), area.image);
  const headerPath = path.join(root, "public", area.headerImage);
  assert.ok(fs.existsSync(headerPath), area.headerImage);
  assert.ok(fs.statSync(headerPath).size < 300000, area.headerImage + " exceeds header image budget");
  for (const category of area.categories) assert.ok(services.some(s => s.area === area.id && s.category === category.id));
}
for (const service of services) {
  const href = serviceHref(service);
  assert.match(service.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.equal(getService(service.area, service.slug), service);
  assert.ok(getServiceCategory(service));
  assert.ok(service.summary.length > 80);
  assert.ok(service.inputs.length >= 2 && service.inputs.every(Boolean));
  assert.ok(service.deliverable.length > 20);
  assert.ok(!/TODO|placeholder|confirmar con APEN/i.test(JSON.stringify(service)));
  assert.equal(getMarkdownForPath(href).status, 200);
  assert.ok(getMarkdownForPath(href).body.includes(service.summary));
  assert.equal(detailMetadata(service).alternates.canonical, "https://apen.mx" + href);
  assert.ok(sitemap.some(s => s.url === "https://apen.mx" + href));
}
assert.equal(getService("legal", "no-existe"), undefined);
assert.equal(getMarkdownForPath("/servicios/legal/no-existe").status, 404);
assert.equal(getMarkdownForPath("/servicios/project-finance").body, getMarkdownForPath("/servicios/financiamiento-de-proyectos").body);
assert.equal(getMarkdownForPath("/capacidad-ejecutiva").body, getMarkdownForPath("/servicios").body);
assert.ok(!sitemap.some(s => /capacidad-ejecutiva|servicios\/project-finance/.test(s.url)));
console.log("PASS: 125 fichas, IDs y URLs únicas, conteos por sector, categorías, assets, metadata, sitemap y Markdown.");

async function verifyHttp() {
  const base = process.env.SERVICE_TEST_BASE_URL;
  if (!base) return;
  const paths = ["/servicios", ...serviceAreas.map(a => "/servicios/" + a.id), ...services.map(serviceHref)];
  for (const area of serviceAreas) {
    const response = await fetch(base + area.headerImage);
    assert.equal(response.status, 200, area.headerImage);
    assert.ok(response.headers.get("content-type").startsWith("image/"), area.headerImage);
  }
  for (const institution of Object.values(serviceInstitutions)) {
    const response = await fetch(base + institution.logo);
    assert.equal(response.status, 200, institution.logo);
    assert.ok(response.headers.get("content-type").startsWith("image/"), institution.logo);
  }
  for (const route of paths) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.ok(html.includes("<h1"), route + " missing h1");
    assert.ok(html.includes("brandHeading") && html.includes("headingAccent"), route + " missing branded heading");
    assert.ok(!html.includes('aria-label="Ruta de navegación"'), route + " still shows breadcrumb navigation");
    assert.ok(html.includes('rel="canonical"'), route + " missing canonical");
    assert.ok(html.includes('application/ld+json'), route + " missing schema");
    assert.ok(!html.includes("| APEN | APEN"), route + " duplicated title suffix");
    const service = services.find(s => serviceHref(s) === route);
    if (service) {
      const headerImage = serviceAreas.find(area => area.id === service.area).headerImage;
      assert.ok(html.includes(headerImage) || html.includes(encodeURIComponent(headerImage)), route + " missing sector header image");
      for (const institution of getServiceInstitutions(service)) {
        assert.ok(html.includes(institution.logo) || html.includes(encodeURIComponent(institution.logo)), route + " missing " + institution.name + " image");
      }
      const graphs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
      assert.ok(graphs.some(g => g["@graph"]?.some(item => item["@type"] === "Service" && item.name === service.title)), route + " incorrect schema");
      assert.ok(html.includes("/contacto?servicio=" + service.id), route + " missing contextual contact");
    }
  }
  for (const [oldPath, target] of [["/capacidad-ejecutiva","/servicios"],["/servicios/project-finance","/servicios/financiamiento-de-proyectos"]]) {
    const response = await fetch(base + oldPath, { redirect:"manual" });
    assert.ok([301,308].includes(response.status), oldPath);
    assert.equal(new URL(response.headers.get("location"), base).pathname, target);
  }
  assert.equal((await fetch(base + "/servicios/legal/no-existe")).status, 404);
  const contact = await fetch(base + "/contacto?servicio=H54").then(r => r.text());
  assert.ok(contact.includes('name="servicio-id" value="H54"'));
  assert.ok(contact.includes('name="servicio"'));
  for (const area of serviceAreas) {
    const service = services.find(s => s.area === area.id);
    const response = await fetch(base + serviceHref(service), { headers: { Accept: "text/markdown" } });
    assert.equal(response.status, 200);
    assert.ok(response.headers.get("content-type").includes("text/markdown"));
    assert.ok((await response.text()).includes(service.summary));
  }
  console.log("PASS: " + paths.length + " rutas HTTP, schemas, CTA contextual, 2 redirecciones y 404.");
}
verifyHttp().catch(error => { console.error(error); process.exitCode = 1; });
