import { defineConfig } from "rollup";
import vue from "@vitejs/plugin-vue";
import typescript from "@rollup/plugin-typescript";
import vueJsx from "@vitejs/plugin-vue-jsx"; // 可选

export default defineConfig({
  input: process.env.COMPONENT_ENTRY,
  output: [
    {
      format: "esm",
      dir: "dist/components",
      entryFileNames: `${process.env.COMPONENT_NAME}/${process.env.COMPONENT_NAME}.es.js`,
    },
    {
      format: "umd",
      dir: "dist/components",
      name: "NiceUI",
      entryFileNames: `${process.env.COMPONENT_NAME}/${process.env.COMPONENT_NAME}.umd.js`,
    },
  ],
  plugins: [
    vue(),           // 处理 .vue
    vueJsx(),        // 如果未来可能添加 JSX
    typescript({     // 支持 TS 类型
      tsconfig: "./tsconfig.json",
      sourceMap: false
    })
  ]
});
