/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return
    const visited = new Map();
    // const dfs = (n) => {
    //     // clone
    //     const nCopy = new Node(n.val)
    //     visited.set(n, nCopy)
    //     n.neighbors && n.neighbors.forEach(ne => {
    //         if (!visited.has(ne)) {
    //             dfs(ne)
    //         }
    //         // 这行写在dfs后面，保证有的
    //         nCopy.neighbors.push(visited.get(ne))
    //     })
    // }
    // dfs(node)
    const q = [node]
    visited.set(node, new Node(node.val))
    while (q.length) {
        const n = q.shift()
        n.neighbors && n.neighbors.forEach(ne => {
            if (!visited.has(ne)) {
                q.push(ne)
                const nCopy = new Node(ne.val)
                visited.set(ne, nCopy)
            }
            visited.get(n).neighbors.push(visited.get(ne))
        })
    }
    return visited.get(node)

};
// @lc code=end

