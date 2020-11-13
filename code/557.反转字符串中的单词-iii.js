/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (70.76%)
 * Likes:    255
 * Dislikes: 0
 * Total Accepted:    101.6K
 * Total Submissions: 138.3K
 * Testcase Example:  `"Let's take LeetCode contest"`
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入："Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {
//   // 按照空格分隔转换为数组
//   var arr = s.split(' ')
//   // 转换为数组再转换为字符串
//   var result = arr.map(item => {
//     // 每个元素转换为数组翻转 再转换为字符串
//     return item.split('').reverse().join('')
//   }).join(' ')
//   return result
// };
// var reverseWords = function (s) {
//   // 按照空格分隔转换为数组
//   // 转换为数组再转换为字符串
//   return s.split(/\s/g).map(item => {
//     // 每个元素转换为数组翻转 再转换为字符串
//     return item.split('').reverse().join('')
//   }).join(' ')
// };
var reverseWords = function (s) {
  console.log(s.match(/[\w']+/g));
  // match正则转换为数组
  // 转换为数组再转换为字符串
  return s.match(/[\w']+/g).map(item => {
    // 每个元素转换为数组翻转 再转换为字符串
    return item.split('').reverse().join('')
  }).join(' ')
};
// @lc code=end
export default reverseWords

