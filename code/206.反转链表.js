/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (70.91%)
 * Likes:    1346
 * Dislikes: 0
 * Total Accepted:    373.4K
 * Total Submissions: 526.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 *
 * 示例:
 *   p2 p1
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 *
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
 * @param {ListNode} head //头部
 * @return {ListNode}
 *   p2 p1
 * 输入: 1->2->3->4->5->NULL
 */
// 双指针遍历链表  翻转双指针
var reverseList = function (head) {
  let p1 = head
  let p2 = null
  while (p1) {
    /**
     * p2=p1 p1=p1.next
     */
    const tmp = p1.next
    p1.next = p2
    p2 = p1
    p1 = tmp
  }
  return p2
}
// @lc code=end
