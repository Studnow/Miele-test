import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.join(__dir, '..', 'src', 'data', 'components', 'index.js');

const content = await fs.readFile(indexPath, 'utf8');
const re = /import\s+(?:[\w\{\},\s\*\n]+)\s+from\s+['"](.+?)['"]/g;
let m;
const base = path.join(__dir, '..', 'src', 'data', 'components');

while ((m = re.exec(content))) {
  const rel = m[1];
  const p = rel.startsWith('./') ? path.join(base, rel.slice(2)) : path.join(base, rel);
  try {
    await import(pathToFileUrl(p).href);
    console.log('ok', rel);
  } catch (e) {
    console.error('fail', rel, e.message);
    process.exit(1);
  }
}
console.log('all imports ok');

function pathToFileUrl(p) {
  const u = new URL('file://' + path.resolve(p));
  return u;
}