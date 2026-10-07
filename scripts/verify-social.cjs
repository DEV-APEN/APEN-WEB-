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
  'next/image': ({ fill, priority, ...props }) => React.createElement('img', props),
  './SocialTools': () => null,
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

async function verifyTools() {
  const state = ['', false];
  let hook = 0;
  let opened = 0;
  let closed = 0;
  const modal = { showModal: () => opened++, close: () => closed++ };
  const component = loadTS('src/app/redes/SocialTools.tsx', {
    react: { ...React, useRef: () => ({ current: modal }), useState: () => {
      const index = hook++;
      return [state[index], value => { state[index] = value; }];
    } },
    'next/image': props => React.createElement('img', props),
    './redes.module.css': new Proxy({}, { get: (_, key) => key === '__esModule' ? false : String(key) }),
  });
  const tree = component.default();
  const buttons = tree.props.children[0].props.children;
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  let copied = '';
  let shared;
  const navigator = { clipboard: { writeText: async value => { copied = value; } } };
  Object.defineProperty(globalThis, 'navigator', { value: navigator, configurable: true });
  try {
    await buttons[1].props.onClick();
    assert.equal(copied, 'https://apen.mx/redes');
    assert.equal(state[0], 'Enlace copiado.');
    copied = '';
    await buttons[0].props.onClick();
    assert.equal(copied, 'https://apen.mx/redes', 'Share falls back to clipboard');
    navigator.share = async value => { shared = value; };
    await buttons[0].props.onClick();
    assert.equal(shared.url, 'https://apen.mx/redes');
    assert.equal(state[0], 'Enlace compartido.');
    navigator.share = async () => { throw new DOMException('Cancelled', 'AbortError'); };
    copied = '';
    await buttons[0].props.onClick();
    assert.equal(copied, '', 'Cancelling share must not copy');
    navigator.clipboard.writeText = async () => { throw new Error('Clipboard unavailable'); };
    await buttons[1].props.onClick();
    assert.equal(state[1], true, 'Unavailable clipboard offers manual copy');
    buttons[2].props.onClick();
    assert.equal(opened, 1);
    const dialog = tree.props.children[3];
    dialog.props.children.props.children[0].props.onClick();
    assert.equal(closed, 1);
    const outside = {};
    dialog.props.onClick({ target: outside, currentTarget: outside });
    assert.equal(closed, 2);
    const download = dialog.props.children.props.children[5];
    assert.equal(download.props.download, 'APEN-redes-QR.png');
    assert.ok(fs.existsSync(`public${download.props.href}`));
    console.log('PASS: share, copy, cancellation, clipboard fallback, QR open/close and downloadable asset.');
  } finally {
    if (descriptor) Object.defineProperty(globalThis, 'navigator', descriptor);
    else delete globalThis.navigator;
  }
}

verifyTools().catch(error => { console.error(error); process.exitCode = 1; });
