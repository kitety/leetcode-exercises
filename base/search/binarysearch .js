// 二分搜索 前提排好序了

/* eslint-disable no-extend-native */
Array.prototype.binarysearch = function (item) {
  let low = 0
  let high = this.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = this[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
const arr = [-69, 2, 3, 4, 58, 110, 145, 178, 196]
console.log('arr.binarysearch (): ', arr.binarysearch(3))
