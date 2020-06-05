/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let i = 0, j = 0, maxLength = 0;
  if (s.length === 0) {
    return 0
  }
  for (i; i < s.length; i++) {
    const element = s[i];
    if (!set.has(element)) {
      set.add(element)
      maxLength = Math.max(maxLength, set.size)
    } else {
      // 只要有重复的就要删除s[j]
      while (set.has(element)) {
        set.delete(s[j])
        j++
      }
      // 删除之后还要加入
      set.add(element)
    }
  }
  return maxLength

};
// @lc code=end

