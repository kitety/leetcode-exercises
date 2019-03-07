/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.09%)
 * Total Accepted:    55K
 * Total Submissions: 171.1K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 数组长度为1或者0
    if (strs.length < 1) {
        return ''
    } else if (strs.length === 1) {
        return strs[0]
    }

    let base = strs[0];
    let i = 0;
    let noError = true
    let temp = ''

    while (i < base.length && noError) {
        let j = 1;
        while (j < strs.length) {
            if (strs[j].indexOf(base.slice(0, 1 + i)) < 0) {
                noError = false
                break
            }
            j++;
        }
        i++
        if (i - 1 > 0) {
            temp = base.slice(0, i - 1)
        } else {
            temp = base.slice(0, 0)

        }
    }
    temp = noError ? base.slice(0, i) : temp
    return temp
};
console.log(longestCommonPrefix(["c", "acc", "ccc"]))

