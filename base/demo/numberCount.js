function getStr(count) {
  let arr = new Array(count)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 1 + i
  }
  return arr.join("")
}
function getCount(number) {
  return getStr(number)[number]
}

console.log(getCount(10))
