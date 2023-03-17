/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
// 时间 o(n!)
// 空间 on 递归的层数
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const backtrack = (path) => {
        if (path.length === nums.length) {
            res.push(path);
            return
        }
        nums.forEach(n => {
            if (path.includes(n)) {
                return
            }
            backtrack(path.concat(n))

        })

    }
    backtrack([])

    return res


};
// @lc code=end

