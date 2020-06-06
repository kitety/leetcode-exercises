/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }
  let start = 0;
  // 兼容'ab'
  let maxLength = 1
  /**
   * 
   * @param {*} left 左边
   * @param {*} right 右边
   * 判断左边、右边有没有越界，判断两边的字符是否一样
   */
  function expandAroundCenter (left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1
        start = left
      }
      left--;
      right++
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1)
    expandAroundCenter(i, i + 1)
  }
  return s.substring(start, start + maxLength)

};
// @lc code=end

