/* eslint-disable */
import path from "path"
import { defineConfig } from "vite"

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    base: "/oclock/",
    build: {
      outDir: "./dist",
      emptyOutDir: true,
      minify: "esbuild",
      manifest: true,
      sourcemap: true,
    },
  }
})
