import fs from "fs";
import path from "path";

const pkgRoot = path.resolve("packages/components");
const srcIndex = path.resolve("src/index.ts");

const components = fs.readdirSync(pkgRoot)
  .filter(name => fs.statSync(path.join(pkgRoot, name)).isDirectory());

let content = '';
components.forEach(name => {
  content += `export { default as ${name} } from '../packages/components/${name}'\n`;
});

fs.writeFileSync(srcIndex, content);
console.log("✔ src/index.ts generated successfully!");
