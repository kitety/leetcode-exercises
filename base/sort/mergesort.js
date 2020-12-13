/* eslint-disable no-extend-native */
// 归并
Array.prototype.mergeSort = function () {
  const rec = arr => {
    if (arr.length === 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    const orderLeft = rec(left)
    const orderRight = rec(right)
    const res = []
    while (orderRight.length || orderLeft.length) {
      if (orderRight.length && orderLeft.length) {
        res.push(orderRight[0] < orderLeft[0] ? orderRight.shift() : orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      }
    }
    return res
  }
  return rec(this)
}
const arr = [11, 7, 8, 2, 3, 6]
console.log('arr: ', arr)
console.log('arr.mergeSort(): ', arr.mergeSort())
