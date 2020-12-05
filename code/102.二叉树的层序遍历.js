/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (63.74%)
 * Likes:    716
 * Dislikes: 0
 * Total Accepted:    224K
 * Total Submissions: 351.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 *
 *
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其层次遍历结果：
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const q = [root]
  const res = []
  while (q.length) {
    let len = q.length
    // 每次的都是同一级
    res.push([])
    while (len--) {
      const n = q.shift()
      res[res.length - 1].push(n.val)
      if (n.left) q.push(n.left)
      if (n.right) q.push(n.right)
    }
  }
  return res
}
// var levelOrder = function (root) {
//   if (!root) return []
//   const stack = [[root, 0]]
//   const res = []
//   while (stack.length) {
//     const [q, l] = stack.shift()
//     if (!res[l]) {
//       res.push([q.val])
//     } else {
//       res[l].push([q.val])
//     }
//     if (q.left) {
//       stack.push([q.left, l + 1])
//     }
//     if (q.right) {
//       stack.push([q.right, l + 1])
//     }
//   }
//   return res
// }
// @lc code=end
