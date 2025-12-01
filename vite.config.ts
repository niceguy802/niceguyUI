import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const componentName = process.env.COMPONENT_NAME
const componentEntry = process.env.COMPONENT_ENTRY
const isComponentBuild = !!componentName && !!componentEntry

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: isComponentBuild
      ? {
          entry: componentEntry!,
          name: componentName!,
          fileName: (format) => `${componentName}.${format}.js`
        }
      : {
          entry: path.resolve(__dirname, 'packages/index.ts'),
          name: 'niceguyUI',
          fileName: (format) => `niceguy-ui.${format}.js`
        },
    outDir: isComponentBuild ? `dist/components/${componentName}` : undefined,
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        }
      }
    }
  }
})
