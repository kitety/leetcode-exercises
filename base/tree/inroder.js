// 先中序遍历
// 左中右
const bt = require('./bt')

const inOrder = root => {
  if (!root) return
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}
inOrder(bt)
