/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/


const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @return {string} The given array items as a string separated by the given separator.
 */

// for loop
// new string variable
// add each value to the string
// add separator inside loop
// .pop?


function join(arr, separator) {
    var joinStr = ""
    for(var i = 0;i < arr.length - 1; i++) {
        joinStr+=arr[i]
        joinStr+=separator
    }
    if(arr.length > 0) {    
        joinStr+=arr[arr.length-1]
        return joinStr
    }
    else{
        return null
    }
}

console.log(join(arr5,separator5))



/*****************************************************************************/
/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70, 71, 72];
const expected6 = "1, 13-15, 37-38, 70";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @return {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */

function bookIndex(nums) {
    var newStr = '';
    // var bookendIndex = 0;
    var sep =", "
    var hyph = "-"
    for (i = 0; i < nums.length; i++) {
        if (nums[i] + 1 == nums[i + 1]) {
            newStr += nums[i]
            while (nums[i] + 1 == nums[i + 1]) {
                i++
                // console.log("in loop " + i)
            }
            // console.log("out of loop " + i)
            // console.log(nums[i])
            newStr += hyph 
            newStr += nums[i] 
            newStr += sep
        } else newStr += nums[i] + sep
    }
    newStr = newStr.slice(0, -2);
    console.log(newStr)
    return newStr
}

// bookIndex(nums1)