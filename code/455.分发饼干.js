/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 时间 n logN
// 空间 o1
var findContentChildren = function (g, s) {
    const sortFunc = (a, b) => a - b
    g.sort(sortFunc)
    s.sort(sortFunc)
    let i = 0
    s.forEach(n => {
        if (n >= g[i]) {
            i++
        }
    })
    return i

};
// @lc code=end

