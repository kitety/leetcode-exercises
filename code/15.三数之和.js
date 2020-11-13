/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (27.19%)
 * Likes:    2168
 * Dislikes: 0
 * Total Accepted:    230.3K
 * Total Submissions: 846.7K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []
  // 排序 后面的start++ 和end--有用到
  nums.sort(function (a, b) {
    return a - b
  })
  // 0 -- length-2，防止越界
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1
      let end = nums.length - 1
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          result.push([nums[i], nums[start], nums[end]])
          start++
          end--
          // 挪动的时候值不一样
          while (start < end && nums[start] === nums[start - 1]) {
            start++
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++
        } else {
          end--
        }
      }
    }
  }
  return result
};
// @lc code=end

