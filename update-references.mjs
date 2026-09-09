import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const EXTS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'];
const SKIP_DIRS = new Set(['node_modules', '.next', 'public', '.git']);
const SKIP_FILES = new Set(['convert-images.mjs', 'update-references.mjs']);

// Local public asset path: a quoted string starting with '/' and ending in an image extension.
const RE = /(['"])(\/[^'"]*?\.(?:png|jpe?g))(['"])/gi;

// Convert failed for this one file, so keep its reference as-is.
const BROKEN = '/appStore_hd.png';

let changed = 0;

function replaceIn(text) {
  return text.replace(RE, (full, q1, p, q2) => {
    if (p.endsWith(BROKEN)) return full;
    const newPath = p.replace(/\.(?:png|jpe?g)$/i, '.webp');
    return `${q1}${newPath}${q2}`;
  });
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      await walk(path.join(dir, entry.name));
      continue;
    }
    const full = path.join(dir, entry.name);
    if (SKIP_FILES.has(entry.name)) continue;
    if (!EXTS.includes(path.extname(entry.name).toLowerCase())) continue;

    const before = await readFile(full, 'utf8');
    const after = replaceIn(before);
    if (after !== before) {
      await writeFile(full, after, 'utf8');
      changed += 1;
      console.log(`updated ${full}`);
    }
  }
}

await walk('.');
console.log(`\nDone. Updated ${changed} files.`);
