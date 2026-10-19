import sharp from "sharp"
import { readdir, unlink } from "node:fs/promises"
import { join } from "node:path"

/**
 * Converts raw blog hero exports in `public/blog/` to 1600px-wide WebP.
 *
 * Accepts png/jpg/jpeg/avif/tif/tiff so it doesn't matter what the image
 * tool exported. The source file is deleted only after the WebP is written.
 * Already-converted .webp files are left alone, so re-running is safe.
 */
const dir = new URL("../public/blog/", import.meta.url).pathname.replace(/^\//, "")
const SOURCE_EXT = /\.(png|jpe?g|avif|tiff?)$/i

const entries = await readdir(dir)
const sources = entries.filter((f) => SOURCE_EXT.test(f))

if (sources.length === 0) {
  console.log("No png/jpg/avif/tiff sources in public/blog/ — nothing to convert.")
}

for (const file of sources) {
  const src = join(dir, file)
  const outName = file.replace(SOURCE_EXT, ".webp")
  const out = join(dir, outName)

  const { width, height } = await sharp(src).metadata()
  await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(out)
  await unlink(src)

  const ratio = (width / height).toFixed(2)
  const flag = Math.abs(width / height - 16 / 9) > 0.15 ? "  <-- not 16:9" : ""
  console.log(`${file} -> ${outName}  (${width}x${height}, ${ratio}:1)${flag}`)
}
