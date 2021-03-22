// * 
//   Balance Index
//   Here, a balance point is ON an index, not between indices.
//   Return the balance index where sums are equal on either side
//   (exclude its own value).
  
//   Return -1 if none exist.
  
// */

// for loop to iterate through the array
// variables?
// return -1 if no index point
// if statements to see if the two sides match?
const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [9,1,1,1,1,7,3,6,1,3]
const expected3 = 5
// /**
//  * Finds the balance index in the given array where the sum to the left of the
//  *    index is equal to the sum to the right of the index.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums
//  * @return {number} The balance index or -1 if there is none.
//  */
function balanceIndex(nums) {
  var left = nums[0]
  var leftIdx = 0
  var right = nums[nums.length-1]
  var rightIdx = nums.length-1
  for( var i = 0; i < nums.length; i++) {
    console.log("***********************");
    console.log("iteration",i)
    console.log("left is",left,"before")
    console.log("right is",right,"before")
    if(left==right && leftIdx+1 == rightIdx) {
      return -1
    }
    else if(left == right && leftIdx+2 == rightIdx) {
      return leftIdx + 1
    }
    else if(left < right){
      left+=nums[leftIdx+1]
      leftIdx++
    }
    else {
      right+=nums[rightIdx-1]
      rightIdx--
    }
    console.log("left is",left)
    console.log("right is",right)
  }
}

// console.log(balanceIndex(nums2))
console.log()
// module.exports = { balanceIndex };

/*****************************************************************************/

/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums4 = [1, 2, 3, 4, 10];
const expected4 = true;
// Explanation: between indices 3 & 4

const nums5 = [1, 2, 4, 2, 1];
const expected5 = false;

/**
 * Determines if there is a balance point BETWEEN indexes where the sum of the
 *    left side is equal to the sum of the right side of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {boolean} Indicates if a balance point exists.
 */
 function balancePoint(nums) {
  var left = nums[0]
  var leftIdx = 0
  var right = nums[nums.length-1]
  var rightIdx = nums.length-1
  for( var i = 0; i < nums.length; i++) {
    console.log("***********************");
    console.log("iteration",i)
    console.log("left is",left,"before")
    console.log("right is",right,"before")
    if(left==right && leftIdx+1 == rightIdx) {
      return true
    }
    else if(left == right && leftIdx+2 == rightIdx) {
      return false
    }
    else if(left < right){
      left+=nums[leftIdx+1]
      leftIdx++
    }
    else {
      right+=nums[rightIdx-1]
      rightIdx--
    }
    console.log("left is",left)
    console.log("right is",right)
  }
}

console.log(balancePoint(nums4))
// module.exports = { balancePoint };

/*****************************************************************************/