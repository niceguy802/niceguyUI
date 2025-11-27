// 自动生成组件脚手架
import fs from "fs";
import path from "path";

const name = process.argv[2];
if (!name) throw new Error("请输入组件名，如：npm run new Input");

const dir = path.resolve(__dirname, `../packages/${name.toLowerCase()}`);
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(`${dir}/${name}.vue`, 
`<script setup lang="ts">
defineProps<{ label?: string }>();
</script>
<template>
  <div class="my-${name.toLowerCase()}">{{ label }}</div>
</template>
`
);

fs.writeFileSync(`${dir}/index.ts`,
`import ${name} from "./${name}.vue";
import { App } from "vue";
${name}.install = (app: App) => app.component("${name}", ${name});
export default ${name};
`
);

fs.writeFileSync(`${dir}/README.md`, `# ${name} 组件文档\n这里写使用说明`);

console.log(`\n🎉 组件 ${name} 创建完成 packages/${name}/\n`);
