/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    let currentA = headA
    let currentB = headB

    let seenSet = new Set()

    while(currentA!=null){
        
        seenSet.add(currentA)
        currentA = currentA.next
    }

    while(currentB!=null){ 
        if(seenSet.has(currentB)){ 
            return currentB
        }
        currentB = currentB.next
    }

    return null
};