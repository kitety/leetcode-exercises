/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 时间on 空间on
var isSameTree = function (p, q) {
    if (!p && !q) return true
    if (p && q && q.val === p.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
        return true
    }
    return false

};
// @lc code=end

