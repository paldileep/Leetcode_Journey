/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    if(nums.length===1) return true
    
    let maxIndex = 0

    for(let i = 0; i < nums.length ; i++) {

       if(i>maxIndex) return false
       maxIndex = Math.max(maxIndex, i+nums[i])
    }
    
    return true
};