const obj = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: 3,
  },
  f: {
    g: 4,
    h: {
      i: 5,
    },
  },
  arr:['q','w']
}
// 1. 设置结果集
const result = []

// 2. 递归
const recursion = (obj, path = []) => {
  // 是值
  if (typeof obj !== "object") {
    result.push({ [path.join(".")]: obj })
    return
  }
  // 是对象
  for (const i in obj) {
    if (Object.hasOwnProperty.call(obj, i)) {
      path.push(i)
      recursion(obj[i], path)
      path.pop()
    }
  }
}
recursion(obj)

// 3. 返回结果
console.log(result)
/*
[
  { 'a.b.c': 1 },
  { 'a.b.d': 2 },
  { 'a.e': 3 },
  { 'f.g': 4 },
  { 'f.h.i': 5 },
]
*/
