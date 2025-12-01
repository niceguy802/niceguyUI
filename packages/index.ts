import Button from './components/button'

const NiceguyUI = {
  install(app: any) {
    app.use(Button)
  }
}

export { Button, NiceguyUI }
