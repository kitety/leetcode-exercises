/**
 *
 * @param {*} str IP字符串
 */
function testIpUrl (str) {
  // 空值或者其他类型
  if (!str || typeof str !== 'string') return false
  // 转换为数组 判断数组空
  let arr = str.split('.').filter(Boolean)
  // 不规则的ip
  if (arr.length !== 4) return false
  let inValidNumber = arr.some(item => {
    // 判断以0开头等非法段
    let errorStart = item.charAt(0) === '0'
    // 不是数字
    let isNotNumber = isNaN(Number(item))
    // 不是规范的数字
    let isRightNumber = Number(item) < 0 || Number(item) > 255
    return errorStart || isNotNumber || isRightNumber
  })
  if (inValidNumber) return false
  return true
}

console.log(testIpUrl('1.0.0.1'))
console.log(testIpUrl('1.0.0.256'))
console.log(testIpUrl('.0.255.255'))
console.log(testIpUrl('.0.255.asdd'))
console.log(testIpUrl('.0..asdd'))
console.log(testIpUrl('01.0.0.1'))
