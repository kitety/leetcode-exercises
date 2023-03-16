// 冒泡
// 时间 on2
Array.prototype.bubbleSort = function () {
  // this 为数组
  // 循环到倒数第二位
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
  return this
}
const arr = [8, 7, 8, 2, 3, 6]
console.log("arr: ", arr)
console.log("arr.bubbleSort(): ", arr.bubbleSort())
