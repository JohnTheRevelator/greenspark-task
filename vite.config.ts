import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'
import postcssCssVariables from 'postcss-css-variables'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      map: process.env.NODE_ENV === 'production',
      plugins: [autoprefixer(), postcssCssVariables(), postcssNesting()],
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ion-'),
        },
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.css'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
})
