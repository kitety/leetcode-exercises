/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.71%)
 * Total Accepted:    86.9K
 * Total Submissions: 273.8K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isLessThan0 = false;
  // 转为字符串
  x = x + "";
  x = x.split("");
  // 是不是负数
  if (x[0] === "-") {
    x.splice(0, 1);
    isLessThan0 = true;
  }
  // 移除末尾的0
  while (x[x.length - 1] == "0") {
    x.splice(x.length - 1, 1);
  }
  x = Number(x.reverse().join(""));
  x = isLessThan0 ? 0 - x : x;
  // 判断范围
  if (x > 2147483647 || x < -2147483648) {
    x = 0;
  }
  return x;
};

console.log(reverse(-123));
