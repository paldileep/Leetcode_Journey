/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const len = nums.length

   
    for(i=0;i<len;i++){

        for(j=i+1; j<len; j++){

            let sum = nums[i] + nums[j]
            if(sum === target) {
                return [i, j]
            }
        }

    }
    
};