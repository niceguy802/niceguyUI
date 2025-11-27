import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mts";

export default defineConfig({
  title: "niceguyUI",
  description: "基于 Vue3 + Element Plus + TS 的组件库",
  lang: "zh-CN",

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/install" },
      { text: "组件", link: "/components/button" }
    ],
    sidebar
  },

  markdown: {
    config(md) {
      // 支持 :::demo 语法
      import("markdown-it-container").then(container => {
        md.use(container.default, "demo", {
          render(tokens, idx) {
            const info = tokens[idx].info.trim().slice(5).trim();
            return tokens[idx].nesting === 1
              ? `<DemoBlock title="${info}">\n`
              : `</DemoBlock>\n`;
          }
        });
      });
    }
  }
});
