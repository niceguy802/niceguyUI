import Button from './button.vue'
import { App } from 'vue'

Button.install = (app: App) => {
  app.component('MyButton', Button)
}

export default Button
