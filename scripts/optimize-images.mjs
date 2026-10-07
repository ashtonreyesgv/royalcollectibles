// Resizes and converts new images in public/images to WebP.
// Drop a .jpg or .png into one of the folders below, run `npm run images`,
// then reference it as /images/<folder>/<name>.webp. The original file is removed.
import { readdir, unlink } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve('public/images')
const FOLDERS = {
  shop: { width: 1600, quality: 78 },
  events: { width: 1100, quality: 82 },
  covers: { width: 420, quality: 78 },
}
const SOURCE = /\.(jpe?g|png)$/i

let converted = 0
for (const [folder, { width, quality }] of Object.entries(FOLDERS)) {
  const dir = path.join(ROOT, folder)
  for (const file of await readdir(dir)) {
    if (!SOURCE.test(file)) continue
    const src = path.join(dir, file)
    const name = file.replace(SOURCE, '')

    await sharp(src, { failOn: 'none' })
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(path.join(dir, `${name}.webp`))

    await unlink(src)
    converted++
    console.log(`${folder}/${name}.webp`)
  }
}
console.log(converted ? `Converted ${converted} image(s).` : 'Nothing to convert.')
