//  扩展样式 + Demo 渲染
import DefaultTheme from 'vitepress/theme'
import DemoBlock from './demo-block.vue'
import './style.css'

export default {
  ...DefaultTheme,   // 继承默认主题
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock) // 注册全局 DemoBlock
  }
}
