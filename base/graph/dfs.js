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
