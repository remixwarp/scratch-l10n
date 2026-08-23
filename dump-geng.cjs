const fs = require('fs');
const path = require('path');
// 从 editor-msgs.js 中提取 geng 段并保存为 JSON
let s = fs.readFileSync('e:/RemixWarp/scratch-l10n/locales/editor-msgs.js', 'utf8');
const start = s.indexOf('"geng": {');
if (start < 0) { console.error('not found'); process.exit(1); }
let depth = 1;
let i = start + 8; // skip "geng":
let j = s.indexOf('{', start);
let end = j + 1;
let d = 1;
while (end < s.length && d > 0) {
    const c = s[end];
    if (c === '{') d++;
    else if (c === '}') d--;
    end++;
}
const block = s.slice(j, end);
fs.writeFileSync('e:/RemixWarp/scratch-gui/scripts/geng-data/editor-geng.json', block);
console.log('editor-geng.json written, chars:', block.length);
