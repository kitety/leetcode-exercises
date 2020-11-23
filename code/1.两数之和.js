/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.84%)
 * Total Accepted:    259.1K
 * Total Submissions: 577.7K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     let tempArr = []
//     let numLen = nums.length
//     for (let i = 0; i < numLen; i++) {
//         for (let j = i+1; j < numLen; j++) {
//             if (nums[i] + nums[j] === target) {
//                 tempArr=[i, j]
//             }
//         }
//     }
//     return tempArr
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     let tempArr = []
//     let numLen = nums.length
//     for (let i = 0; i < numLen; i++) {
//         let j = nums.indexOf(target - nums[i], i + 1)
//         if (j != -1) {
//             tempArr = [i, j]
//         }
//     }
//     return tempArr
// };

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//     let tempArr = []
//     let numLen = nums.length
//     let index = 0;
//     while (index < numLen) {
//         let j = nums.indexOf(target - nums[index], index + 1)
//         if (j != -1) {
//             tempArr = [index, j]
//             break
//         }
//         index++
//     }
//     return tempArr
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 时间on 空间on
 */
var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    const value = target - element
    // 索引大于等于0
    if (map[value] >= 0) {
      return [map[value], i]
    } else {
      map[element] = i
    }
  }
  return []
}

var nums = [2, 7, 11, 15]
var target = 9
console.log(twoSum(nums, target))
