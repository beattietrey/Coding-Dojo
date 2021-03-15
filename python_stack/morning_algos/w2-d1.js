// /* 
//   Given an array of strings
//   return a sum to represent how many times each array item is found (a frequency table)
//   Useful methods:
//     Object.hasOwnProperty("keyName")
//       - returns true or false if the object has the key or not
//     Python: key in dict
// */

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

// /**
//  * Builds a frequency table based on the given array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<string>} arr
//  * @return {Object<string, number>} A frequency table where the keys are items
//  *    from the given arr and the values are the amnt of times that item occurs.
//  */
function frequencyTableBuilder(arr) {
    freqObj = {}
    for(var i = 0; i < arr.length;i++) {
        if(arr[i] in freqObj) {
            freqObj[arr[i]]++
        }
        else{
            freqObj[arr[i]] = 1
        }
    }
    return freqObj
}

const arr2 = ["a", "b", "a", "c"];
console.log(frequencyTableBuilder(arr2));


/*****************************************************************************/

  
/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @return {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
 function reverseWordOrder(wordsStr) {
    var strArr = wordsStr.split(" ")
    var revArr = []
    for(var i = strArr.length-1; i >= 0; i--) {
        revArr.push(strArr[i])
    }
    
    retStr = revArr.join(" ")
    console.log(retStr);
}

// reverseWordOrder("This is another string.")

