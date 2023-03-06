/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 输入链表有序 重复的一定相邻
  // 遍历当前的链表，如果当前元素和下个元素相同 就删除下个元素
  // 原链表操作
  let p = head;
  // 当前元素和下一个元素有值
  while (p && p.next) {
    if (p.val === p.next.val) {
      // 相同才删除
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};
// @lc code=end
