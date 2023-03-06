/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (38.89%)
 * Likes:    5272
 * Dislikes: 0
 * Total Accepted:    626.2K
 * Total Submissions: 1.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 遍历链表 空的
  let l3 = new ListNode(0);
  let p1 = l1; // 指针
  let p2 = l2; // 指针
  let p3 = l3;
  let carry = 0; // 十位
  while (p1 || p2) {
    // 获取值
    let v1 = p1 ? p1.val : 0;
    let v2 = p2 ? p2.val : 0;
    // 加十位
    let val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    p3.next = new ListNode(val % 10);
    // 移动
    if (p1) {
      p1 = p1.next;
    }
    if (p2) {
      p2 = p2.next;
    }
    p3 = p3.next;
  }
  // 最后的一位
  if (carry) {
    p3.next = new ListNode(carry);
  }
  return l3.next;
};
// @lc code=end
