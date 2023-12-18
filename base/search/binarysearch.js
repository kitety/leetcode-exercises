// 二分搜索 前提排好序了

/* eslint-disable no-extend-native */
// logN 时间复杂度 O(logN)
Array.prototype.binarySearch = function (item) {
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
console.log('arr.binarySearch (): ', arr.binarySearch(3))
// 已经是顺序的了
Array.prototype.binarySearch2 = function (item) {
  let low = 0;
  let high = this.length - 1;
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
const arr2 = [-69, 2, 3, 4, 58, 110, 145, 178, 196]
console.log('arr.binarySearch (): ', arr2.binarySearch(110))
// 前提是有序的数组
Array.prototype.binarySearch3 = function (item) {
  let low = 0;
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
  return -1;
}
