/* 
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx but can be any.
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: the index where the left section of smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n^2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/
function partition(nums = [], left = 0, right = nums.length-1) {
    let pivot = Math.floor(nums.length/2)
    let i = left;
    let j = right;
    while (i <= j) {
        console.log("i is "+i)
        console.log("j is "+j)
        if(nums[i] < nums[pivot]) {
            i++
        }
        if(nums[j] > nums[pivot]) {
            j--
        }
        if(nums[i] > nums[pivot] && nums[j] < nums[pivot]){
            [nums[j], nums[i]] = [nums[i], nums[j]]
        }
        console.log(nums)
    }
    console.log("final" + nums)
    return nums
}

partition([3,7,21,17,9,4,643])