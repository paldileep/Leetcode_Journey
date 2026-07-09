/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if(nums.length<2){ 
        return nums.length
    }

    let start = 2 
    for( let end=2; end<nums.length; end++){ 
        if(nums[start-2]!==nums[end]){ 
            nums[start] = nums[end]
            start++
        }
    }
    return start  
};