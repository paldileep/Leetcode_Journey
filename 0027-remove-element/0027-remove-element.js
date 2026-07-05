/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let start = 0 
    let end = nums.length - 1

    while(start<=end){

        if(nums[end]===val){ 
            end--
            continue; 
        }else if(nums[end]!==val && nums[start]===val){
            let temp = nums[end]
            nums[end] = nums[start]
            nums[start] = temp

            start++
            end--
            continue;
        }else{ 
            start++
        }
    }
    return end + 1

};