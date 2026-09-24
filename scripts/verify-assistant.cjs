// Verificación del asistente: enrutamiento de intenciones, búsqueda en el
// contenido real y renderizado seguro del texto.
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

const { mejorIntencion, buscarContenido, partirNegritas, esAfirmacion, esNegacion, esPreguntaExplicativa, INTENCIONES } = require("../src/lib/asistente.ts");
const { construirIndice } = require("../src/lib/asistente-indice.ts");

let pasadas = 0;
function caso(nombre, fn) {
  fn();
  pasadas += 1;
  console.log("PASS: " + nombre);
}

// ── Intenciones: los casos que el matcher anterior resolvía mal ──
const enrutamiento = [
  ["necesito un crédito para mi proyecto", "financiamiento"],
  ["distribución eléctrica", "electrico"],
  ["permiso de generación eléctrica", "electrico"],
  ["quiero comprar coque de petróleo", "coque"],
  ["petcoke", "coque"],
  ["clausuraron mi gasolinera", "legal"],
  ["licencia ambiental única", "hidrocarburos"],
  ["hola", "saludo"],
  ["hola, necesito un permiso para mi gasolinera", "hidrocarburos"],
  ["muchas gracias", "gracias"],
  ["¿cuánto cuesta?", "diagnostico"],
  ["¿dónde están sus oficinas?", "contacto"],
  ["ISO 9001", "certificaciones"],
  ["interconexión con CENACE", "electrico"],
  ["amparo contra multa de ASEA", "legal"],
  ["fondeo con NAFIN", "financiamiento"],
  ["registro en PRONAGAS", "hidrocarburos"],
];
for (const [consulta, esperado] of enrutamiento) {
  caso(`"${consulta}" → ${esperado}`, () => assert.equal(mejorIntencion(consulta)?.id, esperado));
}

// Clic en un botón del menú: coincidencia exacta por etiqueta.
for (const intencion of INTENCIONES.filter(i => !i.conversacional)) {
  caso(`botón "${intencion.label}" → ${intencion.id}`, () => assert.equal(mejorIntencion(intencion.label)?.id, intencion.id));
}

// Falsos positivos por subcadena que ya no deben ocurrir.
for (const [consulta, prohibido] of [
  ["¿qué gastos hay?", "hidrocarburos"],       // "gas" dentro de "gastos"
  ["economía del proyecto", "hidrocarburos"],   // "mia" dentro de "economía"
  ["me pueden dar un aviso", "certificaciones"], // "iso" dentro de "aviso"
  ["creo que sí", "hidrocarburos"],             // "cre" dentro de "creo"
]) {
  caso(`"${consulta}" no cae en ${prohibido}`, () => assert.notEqual(mejorIntencion(consulta)?.id, prohibido));
}

caso("una consulta sin señal no inventa una intención", () => assert.equal(mejorIntencion("zzzz qwerty"), null));

// ── Índice de contenido ──
const indice = construirIndice();
caso("el índice incluye los 125 servicios", () => assert.equal(indice.filter(e => e.tipo === "servicio").length, 125));
caso("el índice incluye fichas de Energy Explica", () => assert.ok(indice.filter(e => e.tipo === "ficha").length >= 40));
caso("todas las URLs del índice son internas y únicas", () => {
  assert.ok(indice.every(e => e.url.startsWith("/")));
  assert.equal(new Set(indice.map(e => e.url)).size, indice.length);
});

// ── Búsqueda ──
const urls = consulta => buscarContenido(consulta, indice).map(r => r.url);
caso("SASISOPA encuentra su ficha", () => assert.ok(urls("¿qué es el SASISOPA?").includes("/consultas/que-es-el-sasisopa")));
caso("MIA encuentra el servicio", () => assert.ok(urls("MIA").includes("/servicios/hidrocarburos/manifestacion-de-impacto-ambiental-mia")));
caso("PRONAGAS encuentra su ficha", () => assert.ok(urls("pronagas").includes("/consultas/que-es-pronagas")));
caso("coque encuentra la ficha de petcoke", () => assert.ok(urls("coque de petróleo").includes("/servicios/hidrocarburos/coque-de-petroleo-petcoke")));
caso("Código de Red encuentra contenido", () => assert.ok(urls("código de red").length > 0));
caso("una pregunta explicativa pone primero la ficha de Energy Explica", () =>
  assert.equal(urls("¿qué es el SASISOPA?")[0], "/consultas/que-es-el-sasisopa"));
caso("un verbo conjugado encuentra su raíz (clausuraron → clausuras)", () =>
  assert.ok(urls("me clausuraron").includes("/servicios/legal/levantamiento-de-clausuras")));
caso("los resultados débiles se descartan frente al mejor", () =>
  assert.ok(!urls("mantenimiento de transformadores").some(url => url.includes("mantenimiento-de-tanques"))));
caso("un empate entre sectores no elige uno al azar", () => assert.equal(mejorIntencion("permiso de autoconsumo"), null));
caso("…y el contenido cubre el empate", () =>
  assert.ok(urls("permiso de autoconsumo").includes("/consultas/permiso-autoconsumo-electrico")));
caso("una consulta sin sentido no devuelve nada", () => assert.equal(buscarContenido("zzzz qwerty", indice).length, 0));
caso("solo palabras vacías no devuelven nada", () => assert.equal(buscarContenido("que es de la", indice).length, 0));

// ── Texto seguro ──
caso("las negritas se parten en segmentos", () =>
  assert.deepEqual(partirNegritas("Hola **APEN** fin"), [
    { texto: "Hola ", negrita: false }, { texto: "APEN", negrita: true }, { texto: " fin", negrita: false },
  ]));
caso("el HTML escrito por la persona queda como texto", () => {
  const segmentos = partirNegritas('<img src=x onerror="alert(1)">');
  assert.equal(segmentos.length, 1);
  assert.equal(segmentos[0].negrita, false);
  assert.equal(segmentos[0].texto, '<img src=x onerror="alert(1)">');
});

// ── Respuestas cortas ──
caso("¿qué es…? / ¿cómo…? cuentan como pregunta explicativa", () => {
  assert.ok(esPreguntaExplicativa("¿Qué es el SASISOPA?"));
  assert.ok(esPreguntaExplicativa("cómo abro una gasolinera"));
  assert.ok(!esPreguntaExplicativa("necesito un permiso"));
});
caso("sí / claro cuentan como afirmación", () => { assert.ok(esAfirmacion("Sí")); assert.ok(esAfirmacion("claro")); });
caso("no / después cuentan como negación", () => { assert.ok(esNegacion("No")); assert.ok(esNegacion("Después")); });

console.log(`\n${pasadas} verificaciones del asistente OK.`);
