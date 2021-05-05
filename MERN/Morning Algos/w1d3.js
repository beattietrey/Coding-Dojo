/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/
function merge(left, right){
    let returnArr = [];
    while(left.length && right.length) {
        if (left[0] == right[0]) {
            returnArr.push(left.shift())
            returnArr.push(right.shift())
        } else if (left[0] < right[0]) {
            returnArr.push(left.shift());
        } else {
            returnArr.push(right.shift());
        }
    }
    return [...returnArr, ...left, ...right];
}

function mergeSort(nums){
    if(nums.length == 1) {
        return nums
    } else {
        let left = nums.slice(0,Math.floor(nums.length/2));
        let right = nums.slice(Math.floor(nums.length/2));
        console.log(left);
        console.log(right);
        return merge(mergeSort(left), mergeSort(right))
    }
}

console.log(mergeSort([3,7,2,6,9,8]))