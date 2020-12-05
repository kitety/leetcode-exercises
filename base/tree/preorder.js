// 先序遍历
// 中左右
const bt = require('./bt')

const preOrder = root => {
  if (!root) return
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log('n : ', n.val)
    // 后进先出
    if (n.right) {
      stack.push(n.right)
    }
    if (n.left) {
      stack.push(n.left)
    }
  }
}
// const preOrder = root => {
//   if (!root) return
//   console.log(root.val)
//   preOrder(root.left)
//   preOrder(root.right)
// }
preOrder(bt)
