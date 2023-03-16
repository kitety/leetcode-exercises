/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
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
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].value > this.heap[index].value
    ) {
      this.swap(parentIndex, index)
      // 节点已经交换 需要用parentIndex
      this.shiftUp(parentIndex)
    }
  }
  // 下移
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].value < this.heap[index].value
    ) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].value < this.heap[index].value
    ) {
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
// 时间 o n*logk 空间on
var topKFrequent = function (nums, k) {
  const map = new Map()
  nums.forEach((item) => {
    map.set(item, map.get(item) ? map.get(item) + 1 : 1)
  })
  const h = new MinHeap()
  map.forEach((value, key) => {
    h.insert({ value, key })
    if (h.size() > k) {
      h.pop()
    }
  })
  return h.heap.map((item) => item.key)
}
// 时间 o n*logn  空间
// var topKFrequent1 = function (nums, k) {
//   const map = new Map()
//   nums.forEach((item) => {
//     map.set(item, map.get(item) ? map.get(item) + 1 : 1)
//   })
//   // 排序
//   const list = Array.from(map)
//   const c = list.sort((a, b) => b[1] - a[1]).map((item) => item[0])
//   return c.slice(0, k)
// }
// topKFrequent1([1, 1, 1, 2, 2, 3])
// @lc code=end
