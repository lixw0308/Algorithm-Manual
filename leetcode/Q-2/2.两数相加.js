/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let list = new ListNode(-1);
    let p = list;
    let carry = 0;
    let sum = 0;
    do {
        sum += (l1 && l1.val) + (l2 && l2.val) + carry;
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        p.next = new ListNode(sum);
        p = p.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        sum = 0;
    } while (l1 || l2);
    if (carry) {
        p.next = new ListNode(1);
    }
    return list.next;
};