/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 集合
// var intersection = function (nums1, nums2) {
//   return [...new Set(nums1)].filter((item) => nums2.includes(item))
// }

// 字典
var intersection = function (nums1, nums2) {
  // 空间复杂度 临时变量的内存消耗
  // 时间 O(m+n)
  // 空间 O(m)
  const map = new Map()
  nums1.forEach((item) => {
    map.set(item, true)
  })
  const res = []
  nums2.forEach(item => {
    if (map.has(item)) {
      res.push(item)
      map.delete(item)
    }
  })
  return res
}
// @lc code=end
