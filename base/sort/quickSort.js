/* eslint-disable no-extend-native */
// 快速 NLog(N)
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) return arr
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      if (current < mid) {
        left.push(current)
      } else {
        right.push(current)
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  return rec(this)
}
const arr = [11, 7, 8, 2, 3, 6]
console.log('arr: ', arr)
console.log('arr.quickSort(): ', arr.quickSort())


Array.prototype.quickSort2 = function () {
  const rec = (arr) => {
    if (arr.length <= 1) return arr
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const element = arr[i];
      if (element < mid) {
        left.push(element)
      } else {
        right.push(element)
      }
    }
    return [...rec(left), mid, ...rec(right)]

  }
  const res = rec(this)
  res.forEach((n, i) => {
    this[i] = n
  });
  return this

}
const arr2 = [11, 7, 8, 2, 3, 6]
console.log('arr: ', arr2)
console.log('arr.quickSort(): ', arr2.quickSort2())
