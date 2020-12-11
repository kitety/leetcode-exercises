class MinHeap {
  constructor() {
    this.heap = []
  }
  // 交换
  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
  // 获取父节点
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
    // return (index-1)>>2
  }
  getLeftIndex(i) {
    return 2 * i + 1
  }
  getRightIndex(i) {
    return 2 * i + 2
  }
  // 上移
  shiftUp(index) {
    // 判断到达顶部
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      // 节点已经交换 需要用parentIndex
      this.shiftUp(parentIndex)
    }
  }
  // 下移
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  // 插入
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  // 删除堆顶
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  // 堆顶
  peek() {
    return this.heap[0]
  }
  // 大小
  size() {
    return this.heap.length
  }
}
const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
h.pop()
console.log("h: ", h.size())
