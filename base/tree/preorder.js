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
// 递归形式
const preOrder1 = root => {
  if (!root) return
  console.log(root.val)
  preOrder1(root.left)
  preOrder1(root.right)
}
preOrder(bt)
