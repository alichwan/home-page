import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function htmlIncludes() {
  return {
    name: 'html-includes',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.replace(
          /<!--\s*#include\s+([^\s]+)\s*-->/g,
          (_, file) => fs.readFileSync(path.resolve(__dirname, file), 'utf-8')
        )
      }
    }
  }
}

export default defineConfig({
  plugins: [htmlIncludes()],
  publicDir: 'public',
})
