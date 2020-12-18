const numToStr = new Array(10)
const strToNum = {}
for (let i = 0; i < 10; ++i) {
  const str = i.toString()
  numToStr[i] = str
  strToNum[str] = i
}

const toNum = (x) => (x === null || x === undefined ? 0 : strToNum[x] || 0)

function reverseStr(str) {
  return str.split("").reverse().join("")
}

// 10进制 加法
function add10(v1, v2) {
  const v1r = reverseStr(v1)
  const v2r = reverseStr(v2)
  const maxLength = Math.max(v1r.length, v2r.length)
  let result = new Array(maxLength)

  let flag = 0 // 进位标致符
  let temp = 0 // 当前计算结果
  for (let i = 0; i < maxLength; ++i) {
    temp = toNum(v1r[i]) + toNum(v2r[i]) + flag
    if (temp >= 10) {
      flag = 1
      temp -= 10
    }else{
      flag = 0
    }
    result[i] = Number(temp)
  }
  if (flag) {
    result.push(flag)
  }
  return result.reverse().join("")
}

console.log(add10("12345", "56789"))
