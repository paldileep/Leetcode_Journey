/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    if(head===null) return head

    let dummyNode = new ListNode(head.val)
    let tail = dummyNode
    let current = head.next

    while(current!==null){

        if(tail.val!=current.val){
            tail.next = new ListNode(current.val)
            tail = tail.next
        }

        current = current.next
    }

    return dummyNode    
};