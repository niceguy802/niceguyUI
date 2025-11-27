// 将packages/components/xx/demo.md 同步到 docs/components/xx.md
// 执行命令 node scripts/sync-demo.cjs
const fs = require("fs");
const path = require("path");

const srcRoot = path.resolve(__dirname, "../packages/components");
const destRoot = path.resolve(__dirname, "../docs/components");

if (!fs.existsSync(destRoot)) fs.mkdirSync(destRoot, { recursive: true });

fs.readdirSync(srcRoot).forEach(name => {
  const demoFile = path.resolve(srcRoot, name, "demo.md");
  if (fs.existsSync(demoFile)) {
    const destFile = path.resolve(destRoot, `${name}.md`);
    fs.copyFileSync(demoFile, destFile);
    console.log(`同步 ${name} demo -> docs/components/${name}.md`);
  }
});
