/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @return {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
// function missingValue(unorderedNums) {
//     var min = unorderedNums[0]
//     var max = unorderedNums[0]
//     for(var i = 0; i < unorderedNums.length;i++) {
//         if (unorderedNums[i] < min) {
//             min = unorderedNums[i]
//         }
//         if (unorderedNums[i] > max) {
//             max = unorderedNums[i]
//         }
//     }
//     for(var i = min; i <= max; i++) {
//         if(unorderedNums.includes(i) == false) {
//             return i
//         }
//     }
//     return null
// }

function missingValue(unorderedNums) {
    var sortedArr = [unorderedNums[0]]
    for(var i = 1;i < unorderedNums.length;i++){
        if(unorderedNums[i]<sortedArr[0]){
            console.log(i)
            sortedArr.unshift(unorderedNums[i])
        }
        if(unorderedNums[i]>sortedArr[sortedArr.length-1]){
            sortedArr.push(unorderedNums[i])
        }  
        console.log(sortedArr)
    }
    for(var i = sortedArr[0];i <= sortedArr[sortedArr.length-1];i++) {
        if( unorderedNums.includes(i)==false) {
            return i 
        }
    }
    return null
}


console.log(missingValue(nums4))

// module.exports = { missingValue };

/*****************************************************************************/