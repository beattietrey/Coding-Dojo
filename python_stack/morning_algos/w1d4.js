/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

  const str1 = "a x a";
  const expected1 = true;
  
  const str2 = "racecar";
  const expected2 = true;
  
  const str3 = "Dud";
  const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
  
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @return {boolean} Whether the given str is a palindrome or not.
   */
  function isPalindrome(str) {
    // // const arr1 = str.split('');
    // //   const arr2 = arr1.reverse();
    // //   const str2 = arr2.join('');
    // //   console.log(str2)
    // //   if (str == str2) {
    // //     return true
    // //   }
    // //   else {
    // //     return false
    // //   }
    // var arr1 = []
    // var arr2 = []
    // var newStr = ""
    // var newStr2 = ""
    // for(var i = 0; i < str.length; i++) {
    //     arr1.push(str[i])
    // }
    // for(var i = str.length -1; i >= 0; i--){
    //     arr2.push(str[i])
    // }
    // for(var i = 0; i < arr1.length; i++) {
    //     newStr+= arr1[i]
    // }
    // for(var i = 0; i < arr2.length; i++) {
    //     newStr2+= arr2[i]
    // }
    // console.log(newStr)
    // console.log(newStr2)
    // if(newStr == newStr2) {
    //     return true
    // }
    // else{
    //     return false
    // }
    // console.log(arr1)
    if(str[0] != str[str.length -1]) {
        return false
    }
    else{
        var newStr = ""
        for(var i = str.length -1; i >=0; i--){
            newStr+=str[i]
        }
        if(str == newStr) {
            return true
        }
        else{
            return false
        }
    }
  }







// function isPalindrome(str) {
//   const arr1 = str.split('');
//   const arr2 = arr1.reverse();
//   const str2 = arr2.join('');
//   if (str == str2) {
//     return True
//   }
//   else {
//     return False
//   }
// }

/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

// const { isPalindrome } = require("./isPalindrome");

const str5 = "what up, daddy-o?";
const expected5 = "dad";

const str6 = "uh, not much";
const expected6 = "u";

const str7 = "Yikes! my favorite racecar erupted!";
const expected7 = "e racecar e";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {
    var tempArr = []
    for(var i = 0; i < str.length;i++){
        for(var j = str.length-1; j > i; j--) {
            if(str[j] != str[i]) {
                // console.log(str[j],str[i])
                console.log(tempArr)
            }
            else {
                for(var k = 0; k < j; k++) {
                    if(i+k == j-k){
                        tempArr.push(str[i])
                    }
                }
                console.log(tempArr)
            }
        }
    }
 }

longestPalindromicSubstring(str5)

// module.exports = { longestPalindromicSubstring };