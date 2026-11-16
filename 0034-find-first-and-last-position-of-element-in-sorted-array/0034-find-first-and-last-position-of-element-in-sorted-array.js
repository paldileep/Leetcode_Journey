/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let left = 0
    let right = nums.length -1

    let leftmost = null
    let rightmost = null

    while(left<=right){
        let mid = Math.floor( left + (right-left)/2)

        if(nums[mid]===target){
            leftmost = mid
            right = mid - 1
        }
        else if(nums[mid]<target){
            left = mid + 1
        }else{ 
            right = mid - 1
        }
    }

    left = 0;
    right = nums.length - 1

    while(left<=right){
        let mid = Math.floor( left + (right-left)/2)

        if(nums[mid]===target){
            rightmost = mid
            left = mid + 1
        }
        else if(nums[mid]<target){
            left = mid + 1
        }else{ 
            right = mid - 1
        }
    }

    if(leftmost!=null){
        return [leftmost, rightmost]
    }else{
        return [-1, -1]
    }
    
};