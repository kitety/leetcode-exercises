const graph = require('./graph')


const visited = new Set()

const dfs = (n) => {
    console.log('n: ', n);
    visited.add(n)
    graph[n].forEach(element => {
        if (!visited.has(element)) {
            dfs(element)
        }
    });
}
dfs(2)

const visitedSet = new Set()
const dfs2 = (n) => {
    console.log('n: ', n);
    visitedSet.add(n)
    graph[n].forEach(element => {
        if (!visitedSet.has(element)) {
            dfs2(element)
        }
    })
}
dfs2(2)
