/// <reference types="vitest" />
import { defineConfig } from 'vite'
import viteConfig from './vite.config'

export default defineConfig({
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/]
      }
    }
  })
})