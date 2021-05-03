/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort

    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/
function bubbleSort(nums){
    for (var i = 0; i < nums.length; i++) {

    }

}

/* 
    https://visualgo.net/en/sorting

    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.

    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
function selectionSort1(nums, val=0){
    if(val >= nums.length-1) {
        return nums;
    } else {
        var min = nums[val];
        var minIdx = val;
        for(var i = val; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
                minIdx = i;
            }
        } 
        if (nums[val] != min) {
            nums[minIdx] = nums[val];
            nums[val] = min;
            return selectionSort1(nums, val+=1)
        } else {
            return selectionSort1(nums, val+=1)
        }
    }
}

function selectionSort2(nums){
    for (var i = 0; i < nums.length; i++) {
        var min = nums[i];
        var minIdx = i;
        for(var j = i; j < nums.length; j+=1) {
            if (nums[j] < min) {
                min = nums[j];
                minIdx = j;
            }
        }
        nums[minIdx] = nums[i];
        nums[i] = min;
    }
    return nums
}



var newArr = [823, 4, 98, 647, 23, 84, 76]

console.log(selectionSort1(newArr))