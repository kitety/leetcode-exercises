// 顺序搜索

/* eslint-disable no-extend-native */
Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (element === item) {
      return i
    }
  }
  return -1
}
const arr = [11, 7, 8, 2, 3, 6]
console.log('arr.sequentialSearch(): ', arr.sequentialSearch(3.3))
