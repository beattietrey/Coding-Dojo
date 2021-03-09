/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @return {string} The given str reversed.
 */
function reverseString(str) {
    var newStr = ""
    for(var i = str.length - 1; i >= 0; i--) {
        newStr+=str[i]
    }
    console.log(newStr)
    return newStr
}

reverseString(str1)
module.exports = { reverseString };