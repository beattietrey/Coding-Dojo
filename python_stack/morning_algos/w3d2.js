/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @return {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    var searchArr = sortedNums
    while(searchArr.length > 0){
        // console.log(searchArr)
        if(searchArr[Math.floor(searchArr.length/2)] == searchNum){
            console.log("i'm ending here")
        }
        else if(searchArr[Math.floor(searchArr.length/2)] > searchNum) {
            searchArr = searchArr.slice(0,Math.floor(searchArr.length/2))
        }
        else {
            searchArr = searchArr.slice(Math.floor(searchArr.length/2))
        }
    }
    if(searchArr[0] != searchNum && searchArr[searchArr.length-1] != searchNum) {
        while(searchArr[0] != searchNum && searchArr[searchArr.length-1] != searchNum) {
            if(searchArr[0] != searchNum) {
                searchArr = searchArr.unshift()
            }
            if(searchArr[searchArr.length] != searchNum){
                searchArr= searchArr.pop()
            }
            // console.log(searchArr)
    }
    if(searchArr.length > 0 ){
        console.log(searchArr.length)
        return searchArr.length
    }
    else{
    return false
    }
}

}
// function binarySearch(sortedNums, searchNum) {
//     var upper = sortedNums.length - 1;
//     var lower = 0;

//     while (upper >= lower) {
//         var middle = Math.floor((upper + lower) / 2)
//         console.log(sortedNums)
//         console.log(middle)
//         if (searchNum == sortedNums[middle]) {
//             return true;
//         } else if (searchNum > sortedNums[middle]) {
//             lower = middle + 1;

//         } else {
//             upper = middle - 1;
//         }
//     }
//     return false
// }



console.log(binarySearch(nums4, searchNum4))
console.log(searchNum4)
console.log(expected4)
// module.exports = { binarySearch };

/*****************************************************************************/

  
/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expectedA1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expectedA2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expectedA3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expectedA4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @return {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {}

module.exports = { interleaveArrays };

// /*****************************************************************************