function Person (name) {
  var _name = name
  this.getName = function () {
    console.log(_name)
  }
}

var p = new Person('bibibi')

console.log(p._name)// undefined
console.log(p.getName())// bibibi
var aa = require('./fill')
aa = 11
console.log('aa: ', aa)
var cc = require('./fill')
console.log('cc: ', cc);

