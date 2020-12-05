// 中序遍历
// 左中右
const bt = require('./bt')

const inOrder = root => {
  if (!root) return
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    let n = stack.pop()
    console.log('n: ', n.val)
    p = n.right
  }
}
// const inOrder = root => {
//   if (!root) return
//   inOrder(root.left)
//   console.log(root.val)
//   inOrder(root.right)
// }
inOrder(bt)
