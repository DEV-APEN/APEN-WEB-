const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

// Render each disclosure state without a browser; interaction/layout still need browser QA.
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
const { serviceAreas } = loadTS('src/data/service-areas.ts');
function elements(node, predicate) {
  if (!React.isValidElement(node)) return [];
  return [...(predicate(node) ? [node] : []), ...React.Children.toArray(node.props.children).flatMap(child => elements(child, predicate))];
}
for (const selected of [null, 'apen', ...serviceAreas.map(area => area.id)]) {
  let stateIndex = 0;
  const updates = [];
  const Header = loadTS('src/components/Header.tsx', {
    react: { ...React, useState: () => [stateIndex++ === 0 ? selected : false, value => updates.push(value)], useEffect: () => {}, useRef: value => ({ current: value }) },
    'next/navigation': { usePathname: () => '/nosotros' },
    'next/link': ({ children, ...props }) => React.createElement('a', props, children),
    'next/image': ({ fill, priority, ...props }) => React.createElement('img', props),
    '@/data/service-areas': loadTS('src/data/service-areas.ts'),
    '@/data/service-icons': loadTS('src/data/service-icons.ts'),
    './MobileMenu': () => null,
    './navigation.module.css': new Proxy({}, { get: (_, key) => key === '__esModule' ? false : String(key) }),
  }).default;
  const tree = Header({ visible: true });
  const html = renderToStaticMarkup(tree);
  assert.equal(elements(tree, node => node.type === 'button' && 'aria-expanded' in node.props).length, 5);
  const trigger = elements(tree, node => node.type === 'button' && node.props['aria-expanded'] === Boolean(selected))[0];
  assert.ok(trigger);
  if (selected) {
    assert.ok(html.includes('id="nav-' + selected + '"'));
    assert.ok(html.includes('aria-controls="nav-' + selected + '"'));
    const area = serviceAreas.find(item => item.id === selected);
    for (const href of area ? area.categories.map(category => '/servicios/' + area.id + '#' + category.id) : ['/nosotros', '/certificaciones', '/faqs', '/diagnostico']) {
      assert.ok(html.includes('href="' + href + '"'), selected + ': missing ' + href);
    }
    const imagePath = area?.headerImage || '/visual/imagenes/nosotros.webp';
    assert.ok(fs.existsSync(path.join('public', imagePath)), imagePath);
    assert.ok(html.includes('src="' + imagePath + '"'));
    trigger.props.onClick({ currentTarget: {} });
    assert.equal(updates.at(-1), null, 'Clicking the active disclosure closes it');
    const backdrop = elements(tree, node => node.props.className === 'backdrop')[0];
    assert.equal(backdrop.props.tabIndex, -1);
    backdrop.props.onClick();
    assert.equal(updates.at(-1), null);
  } else {
    assert.ok(!html.includes('class="dropdown"'));
    let prevented = false;
    trigger.props.onKeyDown({ key: 'ArrowDown', preventDefault: () => { prevented = true; }, currentTarget: {} });
    assert.ok(prevented);
    assert.equal(updates.at(-1), 'hidrocarburos');
  }
  console.log('PASS: navigation markup, links and disclosure handlers: ' + (selected || 'closed'));
}
const css = fs.readFileSync('src/components/navigation.module.css', 'utf8');
require('postcss').parse(css);
assert.ok(css.includes('@media(prefers-reduced-motion:reduce)'));
assert.ok(css.includes('animation:none!important'));
console.log('PASS: navigation CSS parses and supports reduced motion');
