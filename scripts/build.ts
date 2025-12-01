import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const pkgRoot = path.resolve("packages/components");
const distRoot = path.resolve("dist/components");

if (!fs.existsSync(distRoot)) fs.mkdirSync(distRoot, { recursive: true });

// 获取组件列表
const components = fs.readdirSync(pkgRoot)
  .filter(name => fs.statSync(path.join(pkgRoot, name)).isDirectory());

// 构建单个组件（使用 Vite 以正确处理 .vue 文件）
async function buildComponent(name: string) {
  const entry = path.join(pkgRoot, name, "index.ts");
  const outDir = path.join(distRoot, name);

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  console.log(`\n📦 Building component: ${name}`);

  try {
    execSync("npm run build:all", {
      stdio: "inherit",
      env: { ...process.env, COMPONENT_NAME: name, COMPONENT_ENTRY: entry }
    });

    console.log(`✔ Success → ${name}`);
  } catch (err) {
    console.error(`❌ Failed: ${name}`);
    console.error(err);
  }
}

// 批量构建
(async () => {
  console.log("\n🚀 Auto Building Components...\n");
  for (const name of components) {
    await buildComponent(name);
  }
  console.log("\n🎉 All components built successfully!\n");
})();
