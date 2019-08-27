class Anmial {
  constructor() {
    this.name = '1'
  }
  static age = 12
  static classMethod() {
    return 'hello'
  }
  call() {
    console.log('name_', this.name)
  }
}

class Dog extends Anmial {
  constructor() {
    super()
  }
  m() {
    return super.call
  }
}
