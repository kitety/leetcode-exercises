let myset = new Set()

myset.add(1)
myset.add(5)
myset.add("111")
let a = { c: 1 }
myset.add(a)

console.log(myset.has(1))
console.log(myset.has(11))
console.log(myset.has(a))

myset.delete(1)
myset.delete(a)
console.log(myset)
// size 获取大小
console.log("=============")

for (const i of myset) {
  console.log(i)
}
// keys values是一样的
console.log("=============")
for (const i of myset.keys()) {
  console.log(i)
}
console.log("=============")
for (const i of myset.values()) {
  console.log(i)
}
// key value是一样的
console.log("=============entries")
for (const i of myset.entries()) {
  console.log(i)
}

// set 和array 互转

let myArr = [...myset]
console.log(myArr)
console.log(Array.from(myset))

let a1 = [1, 2, 3]
console.log(new Set(a1))

// 交集
// 用 filter

// 差集
// 一个有 一个没有
