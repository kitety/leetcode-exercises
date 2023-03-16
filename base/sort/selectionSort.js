// 选择
Array.prototype.selectionSort = function () {
  // this 为数组
  for (let i = 0; i < this.length - 1; i++) {
    let minIndex = i
    for (let j = i; j <= this.length - 1; j++) {
      if (this[j] < this[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      const temp = this[minIndex]
      this[minIndex] = this[i]
      this[i] = temp
    }
  }
  return this
}
const arr = [8, 7, 8, 2, 3, 6]
console.log("arr: ", arr)
console.log("arr.selectionSort(): ", arr.selectionSort())

