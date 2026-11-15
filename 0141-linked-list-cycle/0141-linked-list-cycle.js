/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if(head===null) return false
    if(head.next===null) return false 

    // let nodeSet = new Set()
    // let current = head
    // while(current!=null){ 

    //     if(nodeSet.has(current)){
    //        return true 
    //     }

    //     nodeSet.add(current)
    //     current = current.next
    // }
    // return false

    let slow = head
    let fast = head
    while(fast!=null && fast.next!=null){
        
        slow = slow.next
        fast = fast.next.next
        if(slow===fast){
            return true
        }
    }
    return false

};