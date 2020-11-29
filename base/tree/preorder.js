// 先序遍历
// 中左右
const bt = require('./bt')

const preOrder = root => {
  if (!root) return
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}
preOrder(bt)
