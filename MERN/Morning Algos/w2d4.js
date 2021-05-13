/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.

    EXAMPLE:
    let nums = [1,2,3,4,6,7,8,10];

    allNonConsecutive(nums) should return:
    [
        { i: 4, n: 6},
        { i: 7, n: 10 }
    ]

    because at index 4, the value is 6, which is not the previous value plus 1 (4 + 1 = 5, not 6),
    and at index 7, the value is 10, which is not the previous value plus 1 (8 + 1 = 9, not 10)
*/
function allNonConsecutive(sortedNums){
    let newArr = []
    for(let i = 1; i < sortedNums.length;i++) {
        if(sortedNums[i] != sortedNums[i-1] + 1) {
            newArr.push({"i":i, "n":sortedNums[i]})
        }
    }
    return newArr
}


/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.

    EXAMPLE:
    let nums = [2, 5, 3, 6, 7, 23, 12] 
    let sum = 16

    findConsqSums(nums, sum) should return:
    [
        [2, 5, 3, 6],
        [3, 6, 7]
    ]

    because 2 + 5 + 3 + 6 = 16, and those numbers are all consecutive, and
    3 + 6 + 7 = 16, and those numbers are also all consecutive
*/
function findConsqSums(nums, targetSum){
    var sum = 0
    var j;
    var conseqSumArr = []
    for(let i = 0; i < nums.length; i++) {
        j = i + 1;
        sum = nums[i];
        var tempArr = [nums[i]]
        while(sum< targetSum && j < nums.length) {
            sum+=nums[j]
            tempArr.push(nums[j])
            j++
        }
        if(sum === targetSum) {
            conseqSumArr.push(tempArr)
        }
    }
    return conseqSumArr
}

console.log(findConsqSums([2, 5, 3, 6, 7, 23, 12] ,16))