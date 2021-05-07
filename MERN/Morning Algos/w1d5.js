/* 
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
    Create a function that uses yesterday’s partition to fully sort an array
    in-place.
    Unstable sort.
    
    Time Complexity
        - Best: O(n log(n)) linearithmic.
        - Average: O(n log(n)) linearithmic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
        last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
    Steps:
        - start by partitioning the full array
            (use the previously built partition algo).
        - then partition the left side of the array
            (left of the returned partition idx) and the right side
            (right of the returned partition idx), recursively.
*/
function partition(nums = [], left = 0, right = nums.length - 1) {
    if(left === right){
        return left;
    }

    const pivotVal = nums[right];

    let newPIdx = left;

    for(let i = left; i < right; i++) {
        if(nums[i] <= pivotVal) {
            [nums[newPIdx], nums[i]] = [nums[i], nums[newPIdx]];
            newPIdx++;
        }
    }

    [nums[newPIdx], nums[right]] = [nums[right], nums[newPIdx]];
    return newPIdx;
}

function quickSort(nums = [], left = 0, right = nums.length-1){
    let newPivot = partition(nums,left,right)
    if((right-left) == 1) {
        return nums
    } else {
        quickSort(nums,left,newPivot-1)
        quickSort(nums,newPivot+1,right)
    }
    return nums
}



numArr = [1,98,6,4,7,3,2,90]
console.log(quickSort(numArr))