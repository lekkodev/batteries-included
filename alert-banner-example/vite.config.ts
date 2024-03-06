import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { spawnSync } from "child_process";

function lekkoPlugin() {
  const fileRegex = /lekko\/[a-z\-]+.ts$/
  return {
    name: 'transform-lekko-files',
    enforce: 'pre',

    transform(src, id) {
      if (fileRegex.test(id)) {
        const result = spawnSync("npx", ["print-transformed", "-f", id]);
        return {
          code: result.stdout.toString()
        }
      }
    },
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [lekkoPlugin(), react()],
  build: {
    minify: false
  }
})
