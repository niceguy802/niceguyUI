import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'niceguyUI',
      fileName: (format) => `niceguy-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'element-plus'], // 🔥不打包Vue和ElementPlus，保持最小体积
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        }
      }
    }
  }
})
