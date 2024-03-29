/* eslint-disable no-extend-native */
// 归并 NLog(N)
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
// const arr = [11, 7, 8, 2, 3, 6]
// console.log('arr: ', arr)
// console.log('arr.mergeSort(): ', arr.mergeSort())


Array.prototype.mergeSort2 = function () {
  const rec = (arr) => {
    // 返回
    if (arr.length <= 1) { return arr }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    const orderLeft = rec(left)
    const orderRight = rec(right)
    const res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res

  }
  return rec(this)
}
const arr = [11, 7, 8, 2, 3, 6]
console.log('arr: ', arr)
console.log('arr.mergeSort(): ', arr.mergeSort2())

const mergeS = (arr) => {
  const rec = (array) => {
    if (array.length <= 1) return array
    const mid = Math.floor(array.length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    const orderLeft = rec(left);
    const orderRight = rec(right)
    const res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  return rec(arr)
}
console.log('first', mergeS([11, 7, 8, 2, 3, 6]))
