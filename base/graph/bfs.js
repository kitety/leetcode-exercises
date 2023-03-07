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
