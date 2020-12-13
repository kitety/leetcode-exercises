/* eslint-disable no-extend-native */
// 插入
Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    // 取出数
    const temp = this[i]
    let j = i
    while (j > 0) {
      // 前面的数比当前的小 就交换
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
      } else {
        // 不然退出
        break
      }
      j -= 1
    }
    this[j] = temp

  }
  return this
}
const arr = [11, 7, 8, 2, 3, 6]
console.log('arr: ', arr)
console.log('arr.insertionSort(): ', arr.insertionSort())
