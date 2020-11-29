// 后序遍历
// 左右中
const bt = require('./bt')

const postOrder = root => {
  if (!root) return
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}
postOrder(bt)
