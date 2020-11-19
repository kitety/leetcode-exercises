// 判断 a是否是b的实例
// a的
const instanceOf = (a, b) => {
  let p = a;
  while (p) {
    if (p === b.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
};

console.log(1);
