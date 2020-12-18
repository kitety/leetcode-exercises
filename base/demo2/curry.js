// function add() {
//   var numberList = Array.from(arguments)
//   // 进一步收集剩下的参数
//   const calc = function () {
//     numberList.push(...arguments)
//     return calc
//   }
//   calc.valueOf = function () {
//     return numberList.reduce((a, b) => a + b, 0)
//   }
//   return calc
// }

// add(1)(2)(3)
// console.log("add(1)(2)(3): ", "" + add(1)(2)(3))
// add(1, 2, 3)(4)
// console.log("add(1, 2, 3)(4): ", add(1, 2, 3)(4))
// add(1)(2)(3)(4)(5)
// console.log("add(1)(2)(3)(4)(5): ", add(1)(2)(3)(4)(5))

function curry(fn, currArgs) {
  return function () {
    let args = [].slice.call(arguments)

    // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
    if (currArgs !== undefined) {
      args = args.concat(currArgs)
    }

    // 递归调用
    if (args.length < fn.length) {
      return curry(fn, args)
    }

    // 递归出口
    return fn.apply(null, args)
  }
}
const persons = [
  { name: "kevin", age: 4 },
  { name: "bob", age: 5 },
]

// 这里的 curry 函数，之前已实现
const getProp = curry(function (obj, index) {
  const args = [].slice.call(arguments)
  return obj[args[args.length - 1]]
})

const ages = persons.map(getProp("age")) // [4, 5]
console.log("ages: ", ages)
const names = persons.map(getProp("name")) // ['kevin', 'bob']
console.log("names: ", names)
