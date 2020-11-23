/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.54%)
 * Total Accepted:    51.8K
 * Total Submissions: 141.2K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */

// var isValid = function (s) {
//   while (s.indexOf('{}') > -1 || s.indexOf('[]') > -1 || s.indexOf('()') > -1) {
//     s = s.replace('{}', '')
//     s = s.replace('[]', '')
//     s = s.replace('()', '')
//   }
//   return s === ''
// }


// 时间on 空间on==stack
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false
  }
  const stack = []
  const map = new Map()
  map.set("{", "}")
  map.set("(", ")")
  map.set("[", "]")
  for (let i = 0; i < s.length; i++) {
    const ele = s[i]
    if (map.has(ele)) {
      stack.push(ele)
    } else {
      const t = stack[stack.length - 1]
      if (ele === map.get(t)) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
// var isValid = function (s) {
//   if (s.length % 2 === 1) { return false }
//   const stack = []
//   const tmp = {
//     '}': '{',
//     ')': '(',
//     ']': '['
//   }
//   for (let i = 0; i < s.length; i++) {
//     const ele = s[i]
//     if (['{', '[', '('].includes(ele)) {
//       stack.push(ele)
//     } else {
//       const t = stack[stack.length - 1]
//       if (t === tmp[ele]) {
//         stack.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return stack.length === 0
// }
// @lc code=end

// export default isValid
