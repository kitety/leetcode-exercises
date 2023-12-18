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
    // 访问
    let n = stack.pop()
    console.log('n: ', n.val)
    // 这里循环
    p = n.right
  }
}
const inOrder1 = root => {
  if (!root) return
  inOrder1(root.left)
  console.log(root.val)
  inOrder1(root.right)
}
// inOrder(bt)

const inOrder2 = root => {
  if (!root) return
  const stack = [];
  let p = root
  while (p || stack.length) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log('n.val', n.val)
    p = n.right
  }

}

inOrder2(bt)
