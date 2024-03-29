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
  // 双指针
  let l = 0
  let res = 0
  const map = new Map()
  for (let r = 0; r < s.length; r++) {
    const element = s[r]
    // 有这个字符，就是重复字符
    // 并且要在l和r之间
    if (map.has(element) && map.get(element) >= l) {
      // 移动到下一位
      l = map.get(element) + 1
    }
    res = Math.max(res, r - l + 1)
    map.set(s[r], r)
  }
  return res
}
// var lengthOfLongestSubstring = function (s) {
//   const set = new Set()
//   let i = 0; let j = 0; let maxLength = 0
//   if (s.length === 0) {
//     return 0
//   }
//   for (i; i < s.length; i++) {
//     const element = s[i]
//     if (!set.has(element)) {
//       set.add(element)
//       maxLength = Math.max(maxLength, set.size)
//     } else {
//       // 只要有重复的就要删除s[j]
//       while (set.has(element)) {
//         set.delete(s[j])
//         j++
//       }
//       // 删除之后还要加入
//       set.add(element)
//     }
//   }
//   return maxLength
// }
// @lc code=end

var lengthOfLongestSubstring1 = function (s) {
  let l = 0;
  let res = 0;
  const map = new Map()
  for (let r = 0; r < a.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1
    }
    res = Math.max(res, r - l + 1)
    map.set(s[r], r)// 当前的字符和下标
  }
  return res


}
