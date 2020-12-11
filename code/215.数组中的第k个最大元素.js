/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 构建最小堆
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
// 时间o（n*logk）
// 空间 ok
var findKthLargest = function (nums, k) {
  const h = new MinHeap()
  nums.forEach((item) => {
    h.insert(item)
    if (h.size() > k) {
      // 删除对顶
      h.pop()
    }
  })
  return h.peek()
}
// @lc code=end
