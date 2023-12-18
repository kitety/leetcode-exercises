// 后序遍历
// 左右中
const bt = require('./bt')

const postOrder = root => {
  if (!root) return
  const stack = [root]
  const outputStack = []
  while (stack.length) {
    const n = stack.pop()
    outputStack.push(n)
    if (n.left) {
      stack.push(n.left)
    }
    // 后进先出
    if (n.right) {
      stack.push(n.right)
    }
  }
  while (outputStack.length) {

    console.log(outputStack.pop().val);
  }
}
// const postOrder = root => {
//   if (!root) return
//   postOrder(root.left)
//   postOrder(root.right)
//   console.log(root.val)
// }
postOrder(bt)
const postOrder2 = root => {
  if (!root) return
  const stack = [root]
  const outputStack = []

  while (stack.length) {
    const n = stack.pop()
    outputStack.push(n)
    if (n.left) {
      stack.push(n.left)
    }
    if (n.right) {
      stack.push(n.right)
    }
  }
  while (outputStack.length) {
    const n = outputStack.pop()
    console.log('n.val', n.val)
  }
}
