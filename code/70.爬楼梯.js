/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// on o1
var climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    // 构造数据
    let dp0 = 1
    let dp1 = 1
    for (let i = 2; i <= n; i++) {
        const tmp = dp0
        dp0 = dp1
        dp1 = dp0 + tmp
    }
    return dp1
};
// on on
// var climbStairs = function (n) {
//     if (n === 1) {
//         return 1
//     }
//     // 构造数据
//     const dp = [1, 1, 2];
//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2]
//     }
//     return dp[n]
// };
// @lc code=end
// var climbStairs = function (n) {
//     if (n === 1) {
//         return 1
//     }
//     if (n === 2) {
//         return 2
//     }
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };

