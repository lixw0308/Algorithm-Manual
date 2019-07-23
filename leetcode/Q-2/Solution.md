# 两数相加

看完题的第一个思路就是遍历链表，其实这题也没什么难的逻辑，关键就在于谁的循环走的少，谁的执行速度就快，还有就是处理`进1`的问题，以及不加控制的新建链表节点，会导致最终的结果比预期结果多一个`undefined`。

## 第一次求解

第一次的思路是控制`while(l1!==null)`，在l1的循环里处理相加，进1，新建链表节点。这时便有三种情况：`1、l1、l2未空；` `2、l1不空，l2空；` `3、l1空，l2为空`。其中第1、2种情况在第一个循环里处理就好，第三种情况需在外面再写个循环来进行处理`while(l2!==null)`。最终还要判断进1标识，处理最后一次进1的问题。

大致逻辑为下：

```javascript
while(l1!==null){
    if(l2!==null){
        //l1、l2都不为空时的逻辑
    } else {
        //l1非空，l2空时的逻辑
    }
}
while(l2!==null){
    //l1空，l2不空时的逻辑
}
if(carry){
    //最后一次进1的处理逻辑
    //如： [5]/n[5],预期结果为[0,1]，所以要在这处理一次
}
```

## 优秀解

自己的逻辑循环，判断很多，导致测试时间很长。之后就去看了看优秀解答，发现他们的思路也是这样，但是在代码的编写上要比自己的好很多，尤其是将三种情况归到一个循环里。优化的核心便在于相加逻辑`sum+=(l1&&l1.val)+(l2&&l2.val)+carry`。

```javascript
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
```