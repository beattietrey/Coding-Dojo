/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1,1,2,3,4,4];
const expected2 = [1, 2, 3];

const nums3 = [1,1,2,3,3,4,4];
const expected3 = [1, 2, 3, 4];

const nums4 = [7,8,65,4,2,5,3,7,4];
const expected4 = [8,65,4,2,5,3,7,4]
/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {Array<number>} The given array deduped.
 */

// for loop to iterate through an array 
// new variable for holding value

function dedupeSorted(nums) {
    var arrDict = {}
    for(var i = 0;i < nums.length;i++){
        if(!(nums[i] in arrDict)) {
            arrDict[nums[i]] = 1
            arrDict['idx'+nums[i]] = i
        }
        else{
            nums.splice(arrDict['idx'+nums[i]],1)
            arrDict['idx'+nums[i]]=i
        }
    }
    return nums
}

// function dedupeSorted(nums) {

//     var resultArr = [nums[0]];
    // for (i = 1; i < nums.length; i++) {
    //     if (!(nums[i] in resultArr)) {
//             resultArr.push(nums[i])
//         }
//     }
//     return resultArr
// }


console.log(dedupeSorted(nums2))

// module.exports = { dedupeSorted };

/*****************************************************************************/

/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

// const nums1 = [];
// const expected1 = [];

// const nums2 = [1];
// const expected2 = [1];

// const nums3 = [5, 1, 4];
// const expected3 = [];

// const nums4 = [5, 1, 4, 1];
// const expected4 = [1];

// const nums5 = [5, 1, 4, 1, 5];
// const expected5 = [5, 1];



//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @return {Array<number>} Mode or modes in any order.
 */
function mode(nums) {}

module.exports = { mode };

/*****************************************************************************/