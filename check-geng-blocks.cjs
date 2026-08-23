const fs = require('fs');
const path = require('path');
const dir = 'e:/RemixWarp/scratch-l10n/locales';
for (const f of ['interface-msgs.js','blocks-msgs.js','extensions-msgs.js','paint-editor-msgs.js','editor-msgs.js']) {
    let s = fs.readFileSync(path.join(dir, f), 'utf8');
    const i = s.indexOf('"geng"');
    console.log('===', f, 'geng at', i);
    if (i >= 0) console.log(s.slice(i, i + 300));
}
