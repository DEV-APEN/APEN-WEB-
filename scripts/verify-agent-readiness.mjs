#!/usr/bin/env node
/**
 * Verificación de agent-readiness de apen.mx.
 *
 *   node scripts/verify-agent-readiness.mjs                     # http://localhost:3000
 *   node scripts/verify-agent-readiness.mjs https://apen.mx     # producción
 *
 * Comprueba los cuatro frentes auditados: 404 recuperable, negociación
 * text/markdown (acceptmarkdown.com), instrucciones para agentes y páginas
 * ancla de confianza (/about, /contact, /privacy).
 */

const BASE = (process.argv[2] || process.env.VERIFY_BASE_URL || 'http://localhost:3000').replace(
  /\/$/,
  ''
);

let passed = 0;
let failed = 0;
let warned = 0;

/** `Vary: Accept` como token propio — "Accept-Encoding" no cuenta. */
function variesOnAccept(vary) {
  return (vary || '')
    .split(',')
    .map((token) => token.trim().toLowerCase())
    .includes('accept');
}

function check(name, condition, detail = '') {
  if (condition) {
    passed += 1;
    console.log(`  PASS  ${name}`);
  } else {
    failed += 1;
    console.log(`  FAIL  ${name}${detail ? ` — ${detail}` : ''}`);
  }
}

/** Aviso no bloqueante: depende del CDN/hosting, no del código de la app. */
function warn(name, condition, detail = '') {
  if (condition) {
    passed += 1;
    console.log(`  PASS  ${name}`);
  } else {
    warned += 1;
    console.log(`  WARN  ${name}${detail ? ` — ${detail}` : ''}`);
  }
}

function get(path, headers = {}) {
  return fetch(`${BASE}${path}`, { headers, redirect: 'manual' });
}

async function section(title, fn) {
  console.log(`\n${title}`);
  await fn();
}

async function main() {
  console.log(`Verificando ${BASE}`);

  await section('1. 404 recuperable para agentes', async () => {
    const res = await get('/some-path-that-does-not-exist');
    check('/some-path-that-does-not-exist devuelve 404', res.status === 404, `status ${res.status}`);
    const html = await res.text();
    check('el cuerpo del 404 enlaza el sitemap', html.includes('/sitemap.xml'));
    check('el cuerpo del 404 enlaza llms.txt', html.includes('/llms.txt'));
    check('el cuerpo del 404 enlaza rutas reales', html.includes('/servicios') && html.includes('/contacto'));

    const md = await get('/es/servicios', { Accept: 'text/markdown' });
    check('404 en markdown devuelve 404', md.status === 404, `status ${md.status}`);
    check(
      '404 en markdown usa Content-Type text/markdown',
      (md.headers.get('content-type') || '').includes('text/markdown'),
      md.headers.get('content-type') || 'sin content-type'
    );
    const mdBody = await md.text();
    check('404 en markdown lista rutas de recuperación', mdBody.includes('https://apen.mx/servicios'));
  });

  await section('2. Negociación de contenido markdown (acceptmarkdown.com)', async () => {
    for (const path of ['/', '/servicios', '/nosotros', '/consultas', '/consultas/que-es-el-sasisopa']) {
      const res = await get(path, { Accept: 'text/markdown' });
      const contentType = res.headers.get('content-type') || '';
      const vary = res.headers.get('vary') || '';
      const body = await res.text();
      check(`${path} responde 200 en markdown`, res.status === 200, `status ${res.status}`);
      check(`${path} declara text/markdown`, contentType.includes('text/markdown'), contentType);
      check(`${path} declara Vary: Accept`, variesOnAccept(vary), vary || 'sin Vary');
      check(`${path} entrega markdown con encabezado`, body.trimStart().startsWith('#'));
      // Evita el fallo silencioso de servir siempre el markdown del home.
      const canonical = `https://apen.mx${path === '/' ? '' : path}`;
      check(
        `${path} entrega el documento correcto`,
        body.includes(`URL canónica: <${canonical}>`),
        `no declara ${canonical}`
      );
    }

    const suffix = await get('/servicios/hidrocarburos.md');
    const suffixBody = await suffix.text();
    check(
      'el sufijo .md sirve markdown',
      suffix.status === 200 && (suffix.headers.get('content-type') || '').includes('text/markdown'),
      `status ${suffix.status}`
    );
    check(
      'el sufijo .md sirve el documento correcto',
      suffixBody.includes('URL canónica: <https://apen.mx/servicios/hidrocarburos>')
    );

    // /about redirige (301) antes del middleware: el agente sigue el redirect
    // y recibe el markdown de /nosotros.
    const alias = await fetch(`${BASE}/about`, { headers: { Accept: 'text/markdown' } });
    const aliasBody = await alias.text();
    check(
      '/about en markdown resuelve a /nosotros',
      alias.status === 200 && aliasBody.includes('URL canónica: <https://apen.mx/nosotros>'),
      `status ${alias.status}`
    );

    const html = await get('/servicios', { Accept: 'text/html' });
    const htmlType = html.headers.get('content-type') || '';
    const htmlVary = html.headers.get('vary') || '';
    check('la variante HTML sigue siendo HTML', htmlType.includes('text/html'), htmlType);
    // Next.js reescribe el Vary de las páginas del app router: en producción
    // esta cabecera depende de la capa CDN (ver README de la verificación).
    warn(
      'la variante HTML declara Vary: Accept',
      variesOnAccept(htmlVary),
      `${htmlVary || 'sin Vary'} — configúralo en el CDN si el host lo permite`
    );
  });

  await section('3. Instrucciones para agentes (when-to-use)', async () => {
    const instructions = await get('/agent-instructions.md');
    check('/agent-instructions.md responde 200', instructions.status === 200, `status ${instructions.status}`);
    const body = await instructions.text();
    check('incluye sección "When to use this"', /when to use this/i.test(body));
    check('incluye sección "When NOT to use"', /when not to use/i.test(body));
    check('explica cómo derivar al usuario', /how to call|cómo derivar/i.test(body));

    const llms = await get('/llms.txt');
    check('/llms.txt responde 200', llms.status === 200, `status ${llms.status}`);
    const llmsBody = await llms.text();
    check('llms.txt incluye "When to use this"', /when to use this/i.test(llmsBody));
    check('llms.txt apunta a agent-instructions.md', llmsBody.includes('/agent-instructions.md'));
    check('llms.txt lista /nosotros', llmsBody.includes('https://apen.mx/nosotros'));
    check('llms.txt lista la política de privacidad', llmsBody.includes('/politica-de-privacidad'));
  });

  await section('4. Páginas ancla de confianza', async () => {
    const aliases = [
      ['/about', '/nosotros'],
      ['/contact', '/contacto'],
      ['/privacy', '/politica-de-privacidad'],
      ['/terms', '/terminos-y-condiciones'],
    ];

    for (const [alias, target] of aliases) {
      const res = await get(alias);
      const location = res.headers.get('location') || '';
      check(
        `${alias} redirige 301 a ${target}`,
        res.status === 301 && location.endsWith(target),
        `status ${res.status} → ${location || 'sin Location'}`
      );
    }

    for (const path of ['/nosotros', '/contacto', '/politica-de-privacidad']) {
      const res = await get(path);
      const body = await res.text();
      const text = body
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      check(`${path} responde 200`, res.status === 200, `status ${res.status}`);
      check(`${path} tiene 500+ caracteres de contenido`, text.length >= 500, `${text.length} caracteres`);
    }
  });

  console.log(`\n${passed} verificaciones OK, ${failed} fallidas, ${warned} avisos.`);
  process.exit(failed === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error(`\nError ejecutando la verificación: ${error.message}`);
  console.error('¿Está el servidor levantado? Ejecuta "npm run build && npm run start" primero.');
  process.exit(1);
});
