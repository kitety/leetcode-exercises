function add () {
  let args = Array.from(arguments)
  function next (...data) {
    args.push(...data)
    return next
  }
  next.valueOf = function () {
    console.log('args: ', args)
    return args.reduce((a, b) => a + b, 0)
  }
  return next
}
let a = add(1)(2)(4)(5)(8)

let b = a(3)(2)

console.log('b : ', '' + b(1)(2)())

// b(1)(2)()
// console.log('b(1)(2)(): ', b(1)(2)());
