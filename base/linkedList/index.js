const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }
// a链表头部
a.next = b
b.next = c
c.next = d

// 遍历链表
let p = a // 指针
while (p) {
  console.log(p.val)
  p = p.next
}

// 插入
const e = { val: 'e' }
c.next = e
e.next = d

// 删除
c.next = d
