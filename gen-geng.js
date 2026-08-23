const fs = require('fs');
const f = 'locales/editor-msgs.js';
let s = fs.readFileSync(f, 'utf8');

// Match the "zh-cn": { ... } block (terminated by a line with exactly "  },")
const re = /"zh-cn":\s*\{[\s\S]*?\n  \},\n/;
const m = s.match(re);
if (!m) {
  console.error('zh-cn block not found');
  process.exit(1);
}
const block = m[0];
const geng = block.replace('"zh-cn":', '"geng":');

// Insert geng block right before zh-cn block
s = s.replace(block, geng + block);
fs.writeFileSync(f, s);
console.log('geng skeleton inserted, chars:', geng.length);
