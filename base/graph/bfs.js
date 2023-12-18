const graph = require('./graph')


const visited = new Set()

const q = [2]
visited.add(2)

while (q.length) {
    const n = q.shift()
    console.log('n', n)
    graph[n].forEach(element => {
        if (!visited.has(element)) {
            q.push(element)
            visited.add(element)

        }
    });
}

const queue = [2];
const visitedSet = new Set()
visitedSet.add(2)

const bfs = () => {
    while (queue.length) {
        const node = queue.shift()
        console.log('node', node)
        graph[node].forEach(element => {
            if (!visitedSet.has(element)) {
                queue.push(element)
                visitedSet.add(element)
            }
        })
    }
}
bfs()
