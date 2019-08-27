function Father() {
  this.a = '1'
  this.b = function() {
    console.log(23)
  }
}
Father.mm = 'hahah'
Father.prototype.test = function() {
  console.log('eee')
}

function Children() {
  this.c = '2'
  Father.call(this)
}
Children.prototype = Object.create(Father.prototype, {
  constructor: { value: Children }
})
let children = new Children(Children, Father)
children.b()
children.test()
console.log(children.c, 'sss', children.a)
// 设置静态方法
Object.setPrototypeOf(Children, Father)

console.log('Children.mm_', Children.mm)
