/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = []
  let arr = path.split("/")
  arr.forEach((item) => {
    if (item === "..") {
      stack.pop()
    } else if (item && item !== ".") {
      stack.push(item)
    }
  })
  if (stack.length === 0) return "/"
  return "/" + stack.join("/")
}
// @lc code=end
