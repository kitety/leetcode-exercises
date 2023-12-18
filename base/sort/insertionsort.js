/* eslint-disable no-extend-native */
// 插入 on2
Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    // 取出数
    const temp = this[i]
    let j = i
    while (j > 0) {
      // 前面的数比当前的大 就交换
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
Array.prototype.insertionSort2 = function () {
  for (let i = 1; i < this.length; i++) {
    // 从第二个数开始的
    const temp = this[i]
    let j = i
    while (j > 0) {
      // 前面的数比当前的大 就换
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
      } else {
        break
      }
      j--
    }
    this[j] = temp
  }
  return this

}
const arr = [11, 7, 8, 2, 3, 6]
console.log('arr: ', arr)
console.log('arr.insertionSort(): ', arr.insertionSort())
console.log('arr.insertionSort(): ', [11, 7, 8, 2, 3, 6].insertionSort2())

Array.prototype.insertionSort3 = function () {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i]
    let j = i;// 第二个数的下标
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
      } else {
        break;
      }
      j--;
    }
    this[j] = temp
  }


  return this
}
