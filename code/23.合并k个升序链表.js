/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
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
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].val > this.heap[index].val
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
      this.heap[leftIndex].val < this.heap[index].val
    ) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].val < this.heap[index].val
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
    if (this.size() === 1) return this.heap.shift()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
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
var mergeKLists = function (lists) {
  const res = new ListNode()
  const h = new MinHeap()
  let p = res
  lists.forEach(function (l) {
    if (l) {
      // 链表的头
      h.insert(l)
    }
  })
  while (h.size()) {
    const n = h.pop()
    p.next = n
    // 往下走一步
    p = p.next
    if (n.next) {
      // 1-4-5=> 4-5  用了1  就该用4 5
      h.insert(n.next)
    }
  }
  //返回的是第一个，但是不是初始值
  return res.next
}
// @lc code=end
r
