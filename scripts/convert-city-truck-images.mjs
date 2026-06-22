import { readdirSync, statSync, unlinkSync } from "node:fs"
import { join, parse } from "node:path"
import sharp from "sharp"

const IMG_DIR = "public/city-truck-images"
const CITIES_DIR = "lib/cities"

const validSlugs = new Set(
  readdirSync(CITIES_DIR)
    .filter((f) => f.endsWith(".ts") && !f.startsWith("_"))
    .map((f) => parse(f).name)
)

const files = readdirSync(IMG_DIR).filter((f) => f.toLowerCase().endsWith(".jfif"))

const results = { converted: [], skipped: [], unknown: [] }

for (const file of files) {
  const stripped = file.replace(/^\d+_/, "")
  const idx = stripped.indexOf("-TX-")
  if (idx === -1) {
    results.unknown.push(file)
    continue
  }
  const cityPart = stripped.slice(0, idx)
  const slug = `${cityPart}-tx`.toLowerCase()

  if (!validSlugs.has(slug)) {
    results.unknown.push(`${file} -> ${slug} (no match)`)
    continue
  }

  const inputPath = join(IMG_DIR, file)
  const outputPath = join(IMG_DIR, `${slug}.webp`)

  try {
    statSync(outputPath)
    results.skipped.push(`${slug}.webp (already exists)`)
    continue
  } catch {}

  await sharp(inputPath)
    .webp({ quality: 82 })
    .toFile(outputPath)

  unlinkSync(inputPath)
  results.converted.push(`${file} -> ${slug}.webp`)
}

console.log(`\nConverted: ${results.converted.length}`)
results.converted.forEach((r) => console.log(`  ${r}`))
if (results.skipped.length) {
  console.log(`\nSkipped: ${results.skipped.length}`)
  results.skipped.forEach((r) => console.log(`  ${r}`))
}
if (results.unknown.length) {
  console.log(`\nUNKNOWN: ${results.unknown.length}`)
  results.unknown.forEach((r) => console.log(`  ${r}`))
}

const missingSlugs = [...validSlugs].filter(
  (s) => {
    try {
      statSync(join(IMG_DIR, `${s}.webp`))
      return false
    } catch {
      return true
    }
  }
)
if (missingSlugs.length) {
  console.log(`\nMissing webp for ${missingSlugs.length} cities:`)
  missingSlugs.forEach((s) => console.log(`  ${s}`))
}
