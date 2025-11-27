// 自动按组件构建 - node scripts/build.ts
import fs from "fs";
import path from "path";
import { build } from "vite";
import vue from "@vitejs/plugin-vue";

const root = path.resolve(__dirname, "../packages");
const components = fs.readdirSync(root).filter(f => fs.statSync(path.resolve(root, f)).isDirectory());

async function buildComponent(name: string) {
  await build({
    plugins: [vue()],
    build: {
      outDir: `dist/${name}`,
      lib: {
        entry: path.resolve(root, name, "index.ts"),
        name,
        fileName: format => `${name}.${format}.js`,
        formats: ["es","umd"]
      },
      rollupOptions: {
        external: ["vue","element-plus"],
        output: {
          globals: { vue: "Vue","element-plus": "ElementPlus" }
        }
      }
    }
  });
  console.log(`✔ ${name} build complete`);
}

(async ()=>{
  console.log("\n📦 Auto building components...\n");
  for(const c of components) await buildComponent(c);
  console.log("\n🎉 All components built successfully!");
})();
