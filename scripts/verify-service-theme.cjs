const assert = require('node:assert/strict');
const fs = require('node:fs');
const postcss = require('postcss');

const css = postcss.parse(fs.readFileSync('src/components/services/catalog.module.css', 'utf8'));
const themes = [];
css.walkRules(rule => {
  if (rule.selector !== '.page' && !rule.selector.startsWith('.page[data-area=')) return;
  const tokens = {};
  rule.walkDecls(decl => { if (decl.prop.startsWith('--')) tokens[decl.prop] = decl.value; });
  if (Object.keys(tokens).length) themes.push({ name: rule.selector, tokens });
});
function luminance(hex) {
  let digits = hex.slice(1);
  if (digits.length === 3) digits = [...digits].map(char => char + char).join('');
  const channels = digits.match(/../g).map(value => parseInt(value, 16) / 255)
    .map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
function contrast(a, b) {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
assert.equal(themes.length, 4);
for (const { name, tokens: t } of themes) {
  assert.ok(luminance(t['--heading-start']) > luminance(t['--heading-end']), name + ': gradient must go light to dark');
  for (const [text, background] of [
    ['--accent', '--accent-soft'], ['--accent-hover', '--accent-soft-hover'],
    ['--button-text', '--button-bg'], ['--button-text', '--button-hover'],
  ]) assert.ok(contrast(t[text], t[background]) >= 4.5, name + ': contrast ' + text + '/' + background);
  console.log('PASS: ' + name + ' light-to-dark gradient and text/button contrast');
}
css.walkDecls(decl => {
  for (const [, token] of decl.value.matchAll(/var\((--[\w-]+)\)/g)) {
    for (const { tokens } of themes) assert.ok(token in tokens, 'Missing theme token: ' + token);
  }
});
assert.ok(css.toString().includes('linear-gradient(to right,var(--heading-start) 0%,var(--heading-end) 100%)'));
