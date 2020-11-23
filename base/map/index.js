let m = new Map()
// 增加
m.set("a", "aa")
m.set("b", "bb")

// 删除
// m.delete('a')
// 删除全部
// m.clear()

// 改
m.set("a", "aa1")

// 查
console.log(m.has("a"))

console.log(m.get('a'));
console.log(m.get('b'));
