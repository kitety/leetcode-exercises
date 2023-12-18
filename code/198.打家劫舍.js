/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// on on
var rob = function (nums) {
    // f(k) = max(f(k - 2) + Ak, f(k -1)).
    if (nums.length === 0) return 0;
    const dp = [0, nums[0]]
    // k-2 从2开始
    for (let i = 2; i <= nums.length; i++) {
        // Ak 对应的是i-1
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    }
    return dp[dp.length - 1]

};
// @lc code=end

// on o1
var rob2 = function (nums) {
    // f(k) = max(f(k - 2) + Ak, f(k -1)).
    if (nums.length === 0) return 0;
    let dp0 = 0;
    let dp1 = nums[0]
    // k-2 从2开始
    for (let i = 2; i <= nums.length; i++) {
        const dp2 = Math.max(dp0 + nums[i - 1], dp1)
        dp0 = dp1
        dp1 = dp2
    }
    return dp1

};
