import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = 'public';
const EXTS = ['.jpg', '.jpeg', '.png']; // skip .svg — it's vector

let count = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (EXTS.includes(path.extname(entry.name).toLowerCase())) {
      const out = full.replace(/\.[^.]+$/, '.webp');
      try {
        await sharp(full).webp({ quality: 82 }).toFile(out);
        count += 1;
        console.log(`converted ${full} -> ${out}`);
      } catch (err) {
        console.error(`FAILED ${full}: ${err.message}`);
      }
    }
  }
}

await walk(ROOT);
console.log(`\nDone. Converted ${count} images.`);
