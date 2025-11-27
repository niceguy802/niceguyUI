import fs from "fs";
import path from "path";

const pkgRoot = path.resolve(process.cwd(), "packages/components");

const getComponents = () => {
  const dirs = fs.readdirSync(pkgRoot).filter(name =>
    fs.statSync(path.resolve(pkgRoot, name)).isDirectory()
  );

  return dirs.map(name => ({
    text: name,
    link: `/components/${name}` // 对应 docs/components/${name}.md
  }));
};

export default {
  "/guide": [
    { text: "安装", link: "/guide/install" },
    { text: "快速上手", link: "/guide/quickstart" },
  ],
  "/components": getComponents(),
};
