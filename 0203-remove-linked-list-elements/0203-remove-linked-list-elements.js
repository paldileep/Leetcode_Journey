/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
     let prev = new ListNode()

     while(head!=null && head.val===val){
        head = head.next
     }

     let current = head 
     while(current!==null){ 

        let tempNxt = current.next

        if(current.val === val){ 
            prev.next = tempNxt
        }
        if(current.val != val){ 
            prev = current
        }
        current = current.next
     }

     return head
};