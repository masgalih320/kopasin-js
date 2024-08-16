import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/kopasin-js.ts'],
  globalName: "Kopasin",
  platform: "browser",
  format: ['cjs', 'esm', 'iife'],
  splitting: false,
  sourcemap: true,
  clean: true,
})