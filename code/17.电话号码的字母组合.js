/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// 递归
var letterCombinations = function (digits) {
  // 组合运算
  function comb(arr) {
    // 临时变量保存前两个组合的结果
    let temp = [];
    // 外层循环 遍历第一个元素
    for (let i = 0; i < arr[0].length; i++) {
      // 遍历第二个元素
      for (let j = 0; j < arr[1].length; j++) {
        // 组合
        const element = `${arr[0][i]}${arr[1][j]}`;
        temp.push(element);
      }
    }
    arr.splice(0, 2, temp);
    if (arr.length > 1) {
      comb(arr);
    } else {
      return temp;
    }
    return arr[0];
  }
  // 字符串映射为数组
  // 两两运算
  // arr.splice应用

  //映射
  let dataMap = [
    "",
    1,
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  // 转换为数组
  let num = digits.split("");
  // 转换转换为真实数据 ["abc","def"]
  let code = num.map((item) => dataMap[Number(item)]).filter(Boolean);
  if ([0].includes(digits.length)) {
    // 长度为0
    return code;
  } else if ([1].includes(digits.length)) {
    // 长度为1
    return code.join("").split("");
  }
  return comb(code);
};
// @lc code=end

export default letterCombinations;
