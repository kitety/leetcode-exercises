function MyFlay1(arr) {
  const res = []
  const format = (data) => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i]
      if (Array.isArray(element)) {
        format(element)
      } else {
        res.push(element)
      }
    }
  }
  format(arr)
  return res
}
function MyFlay2(arr) {
  return arr.flat(Infinity)
}
function MyFlay3(arr) {
  return arr.reduce((prev, next) => {
    if (Array.isArray(next)) {
      return prev.concat(MyFlay3(next))
    } else {
      return prev.concat(next)
    }
  }, [])
}
function MyFlay4(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(MyFlay4([1, [2, [3, [4, [5]]]]])) // [1, 2, 3, 4, 5]
