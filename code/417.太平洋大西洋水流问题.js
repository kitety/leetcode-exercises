/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
    if (!matrix || !matrix[0]) return [];
    // m行 n列
    const m = matrix.length
    const n = matrix[0].length
    // 太平洋
    const flow1 = Array.from({ length: m }, () => new Array(n).fill(false))
    // 大西洋
    const flow2 = Array.from({ length: m }, () => new Array(n).fill(false))
    // console.log('flow2: ', flow1, flow2);
    // 行 列
    const dfs = (r, c, flow) => {
        flow[r][c] = true
        // 周围的点
        const arr = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]]
        arr.forEach(([nr, nc]) => {
            //在矩阵中
            //并且没有访问过
            // 逆流而上
            if (
                nr >= 0 && nr < m && nc >= 0 && nc < n && !flow[nr][nc] && matrix[nr][nc] >= matrix[r][c]
            ) {
                dfs(nr, nc, flow)
            }
        })
    }
    // 沿着海岸线逆流而上

    for (let r = 0; r < m; r++) {
        dfs(r, 0, flow1)
        dfs(r, n - 1, flow2)
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c, flow1)
        dfs(m - 1, c, flow2)
    }
    // console.log('flow2: ', flow1, flow2);
    const res = []
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (flow1[r][c] && flow2[r][c]) {
                console.log(r, c)

                res.push([r, c])
            }
        }
    }
    // console.log('res: ', res);
    return res


};
// pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]])
// @lc code=end

