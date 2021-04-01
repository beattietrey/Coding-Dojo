/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
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

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @return {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
    var sortArr = sortedNums
    if (sortArr.length < 2) {
        if(sortArr[0] == searchNum) {
            return true
        } else {
            return false
        }
    }
    else{
        if(sortArr[Math.floor(sortArr.length/2)] > searchNum) {
            sortArr = sortArr.slice(0,Math.floor(sortArr.length/2))
        } else {
            sortArr = sortArr.slice(Math.floor(sortArr.length/2))
        }
        return binarySearch(sortArr, searchNum)
    }
}

// function binarySearch(sortedNums, searchNum) {
//     console.log(sortedNums);
//     let leftIdx = 0;
//     let rightIdx = sortedNums.length - 1;
//     let midIdx = Math.floor(rightIdx - leftIdx / 2)
//     if (sortedNums[midIdx] == searchNum) {
//         return true;
//     }
//     if (sortedNums.length < 2 || midIdx > sortedNums.length) {
//         return false;
//     }
//     if (searchNum < sortedNums[midIdx]) {
//         sortedNums.splice(midIdx)
//         console.log("less than",sortedNums)
//         return binarySearch(sortedNums, searchNum)
//     } else {
//         console.log("greater than",sortedNums.splice(midIdx))
//         return binarySearch(sortedNums.splice(midIdx), searchNum)
//     }
// }

console.log(binarySearch(nums1, searchNum1))
// module.exports = { binarySearch };

/*****************************************************************************/