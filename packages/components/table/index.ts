import Table from './table.vue'
import { App } from 'vue'

Table.install = (app: App) => {
  app.component('MyTable', Table)
}

export default Table
