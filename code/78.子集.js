/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// time o 2^n
// space on

var subsets = function (nums) {
    const res = [];
    // path length start 开始下标
    const backtrack = (path, l, start) => {
        if (path.length === l) {
            return res.push(path)
        }
        for (let i = start; i < nums.length; i++) {
            backtrack(path.concat(nums[i]), l, i + 1)
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        backtrack([], i, 0)

    }

    return res


};
// @lc code=end

