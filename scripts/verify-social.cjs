const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

function loadTS(relative, mocks = {}) {
  const filename = path.resolve(relative);
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  const nativeRequire = createRequire(filename);
  const module = { exports: {} };
  new Function('require', 'module', 'exports', source)(name => name in mocks ? mocks[name] : nativeRequire(name), module, module.exports);
  return module.exports;
}

const profiles = loadTS('src/data/social-profiles.ts');
const expected = [
  'https://linkedin.com/company/apenmx',
  'https://www.tiktok.com/@apenmx',
  'https://www.youtube.com/channel/UC1LNm_89TBw0NmwfrEARZfQ',
  'https://x.com/APEN2026s',
  'https://www.instagram.com/apenproyectos/',
  'https://www.facebook.com/profile.php?id=61588987324454',
];
assert.deepEqual(profiles.socialProfiles.map(profile => profile.href), expected);
const page = loadTS('src/app/redes/page.tsx', {
  'next/link': ({ children, ...props }) => React.createElement('a', props, children),
  'next/image': props => React.createElement('img', props),
  '@/components/Header': () => null,
  '@/components/Footer': () => null,
  '@/data/social-profiles': profiles,
  './redes.module.css': new Proxy({}, { get: (_, key) => key === '__esModule' ? false : String(key) }),
});
const html = renderToStaticMarkup(React.createElement(page.default));
assert.equal((html.match(/target="_blank" rel="noopener noreferrer"/g) || []).length, 6);
assert.equal((html.match(/<h1>/g) || []).length, 1);
assert.ok(html.includes('href="/consultas"'));
assert.ok(html.includes('href="/contacto"'));
assert.equal(page.metadata.alternates.canonical, 'https://apen.mx/redes');
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
assert.deepEqual(schema.mainEntity.itemListElement.map(item => item.url), expected);
for (const profile of profiles.socialProfiles) {
  assert.ok(html.includes(`href="${profile.href}"`));
  const svg = fs.readFileSync(`public/visual/logos/social/${profile.id}.svg`, 'utf8');
  assert.ok(svg.includes('<svg') && svg.includes('<path'));
  assert.ok(!/<script|onload|<foreignObject/i.test(svg));
}
const css = fs.readFileSync('src/app/redes/redes.module.css', 'utf8');
require('postcss').parse(css);
assert.ok(css.includes('prefers-reduced-motion: reduce'));
assert.ok(css.includes('max-width: 600px'));
assert.ok(css.includes('focus-visible'));
for (const file of ['Header.tsx', 'MobileMenu.tsx', 'Footer.tsx']) {
  assert.ok(fs.readFileSync(`src/components/${file}`, 'utf8').includes('/redes'));
}
assert.ok(fs.readFileSync('src/app/sitemap.ts', 'utf8').includes('/redes'));
console.log('PASS: six supplied social URLs, safe external links, local logos, SSR, metadata, JSON-LD, navigation and responsive/reduced-motion CSS.');
