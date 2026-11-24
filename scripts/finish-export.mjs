// Finishes the static export for GitHub Pages, which has no image server: every size next/image may ask for is
// made here. The URLs match src/image-loader.ts; the widths match next.config.ts.
import { mkdir, readdir, readFile, rename, rmdir, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { widths } from "../image-widths.mjs";

const out = path.resolve("out");
const roots = ["_next/static/media", "images"];
// Used as they are, without resizing
const skip = /(equo-hero|logo-gp).*\.(webp|png)$/;

async function list(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((e) => (e.isDirectory() ? list(path.join(dir, e.name)) : [path.join(dir, e.name)])),
  );
  return nested.flat();
}

let count = 0;
for (const root of roots) {
  for (const file of await list(path.join(out, root))) {
    if (!/\.(png|jpe?g|webp)$/.test(file) || skip.test(file)) continue;
    const source = await readFile(file); // a buffer, because Windows keeps opened files locked
    const relative = path.relative(out, file).split(path.sep).join("/");
    for (const width of widths) {
      const target = path.join(out, "_img", `${relative}-${width}.webp`);
      await mkdir(path.dirname(target), { recursive: true });
      await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 84 }).toFile(target);
      count++;
    }
    await unlink(file);
  }
}
console.log(`Optimized ${count} image files`);

// On Windows, Next writes some prefetch files as nested folders (__next.work/slug/x.txt) while the browser asks
// for flat names (__next.work.slug.x.txt).
for (const file of await list(out)) {
  const parts = path.relative(out, file).split(path.sep);
  const at = parts.findIndex((p, i) => p.startsWith("__next.") && i < parts.length - 1);
  if (at < 0) continue;
  await rename(file, path.join(out, ...parts.slice(0, at), parts.slice(at).join(".")));
}
async function prune(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) if (e.isDirectory()) await prune(path.join(dir, e.name));
  if ((await readdir(dir)).length === 0) await rmdir(dir);
}
await prune(out);
