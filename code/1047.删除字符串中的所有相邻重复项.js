/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  if (s.length <= 1) return s
  let stack = [s[0]]
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.join("")
}
// @lc code=end
