function fill (n, m) {
  n--
  if (n) {
    return [m].concat(fill(n, m))
  } else {
    return m
  }
}
console.log(fill(3, 4)) // [4,4,4]

var a = 1
// module.exports = a
export default a
