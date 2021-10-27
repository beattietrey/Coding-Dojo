// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = []
    let i = 0;
    let j = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] <= nums2[j]) {
            newArr.push(nums1[i])
            i++
        } else {
            newArr.push(nums2[j])
            j++
        }
    }
    while(i < nums1.length){
        newArr.push(nums1[i])
        i++
    }
    while(j < nums2.length){
        newArr.push(nums2[j])
        j++
    }
    if(newArr.length % 2 == 0){
        return (newArr[newArr.length/2] + newArr[(newArr.length/2)-1]) / 2  
    } else {
        return newArr[Math.floor(newArr.length/2)]
    }
};