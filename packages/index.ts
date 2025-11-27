import Button from './components/button'

export { Button }

export default {
  install(app: any) {
    app.use(Button)
  }
}
