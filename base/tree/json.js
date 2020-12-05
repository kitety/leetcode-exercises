const json = {
  a: { b: { c: 1 } },
  d: [1, 2]
}
const dfs = (n, path) => {
  console.log(path.join('') || '', '--', n);
  Object.keys(n).forEach(k => {
    dfs(n[k], path.concat(`['${k}']`))
  })
}
dfs(json, ['json'])
