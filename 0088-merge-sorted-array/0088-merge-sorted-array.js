/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;      // Pointer for the last valid element in nums1
    let j = n - 1;      // Pointer for the last element in nums2
    let k = m + n - 1;  // Pointer for the very last slot of nums1

    // Work backwards while there are elements in both arrays
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If nums2 still has leftover elements, copy them over.
    // (If nums1 has leftovers, they are already in their correct places!)
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};