import sharp from "sharp"
import { readdir, unlink } from "node:fs/promises"
import { join } from "node:path"

const dir = new URL("../public/blog/", import.meta.url).pathname.replace(/^\//, "")
const entries = await readdir(dir)
const pngs = entries.filter((f) => f.toLowerCase().endsWith(".png"))

for (const png of pngs) {
  const src = join(dir, png)
  const out = join(dir, png.replace(/\.png$/i, ".webp"))
  await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(out)
  await unlink(src)
  console.log(`${png} -> ${png.replace(/\.png$/i, ".webp")}`)
}
