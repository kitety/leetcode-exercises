/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 时间 on
// 空间 o1
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        const current = prices[i];
        const prev = prices[i - 1];
        if (current > prev) {
            profit += (current - prev)
        }

    }
    return profit

};
// @lc code=end

