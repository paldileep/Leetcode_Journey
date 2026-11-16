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

var addTwoNumbers = function(l1, l2) {
    let currentList1 = l1
    let currentList2 = l2

    let dummyNode = new ListNode()
    let tail = dummyNode
    let carry = 0

    while((currentList1!=null || currentList2!=null) || carry > 0 ){
        
        let val1 = currentList1 !== null ? currentList1.val : 0;
        let val2 = currentList2 !== null ? currentList2.val : 0;

        let currentSum = val1 + val2 + carry;
        
        let value = currentSum % 10
        carry = Math.floor(currentSum/10)
        
        tail.next = new ListNode(value)
        tail = tail.next

        if (currentList1 !== null) {
            currentList1 = currentList1.next;
        }

        if (currentList2 !== null) {
            currentList2 = currentList2.next;
        }
    }

    return dummyNode.next
};