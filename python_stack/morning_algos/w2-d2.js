/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

// new variable that holds the new string
// find the duplicates
// 
// return a new string with the duplicates excluded

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @return {string} The given string with any duplicate characters removed.
 */
// function stringDedupe(str) {
//     newStr = ""
//     newArr = str.split("")
//     console.log(newArr);
// }
function stringDedupe(str) {
//     var res = ''
//     for(let i = 0; i < str.length; i++){
//         if(res.indexOf(str[i]) < 0){                                                  
//             res += str[i]                                   
//         }
//     }
//     return res
//   }
  

stringDedupe(str1)

/*****************************************************************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str3 = "hello";
const expected3 = "olleh";

const str4 = "hello world";
const expected4 = "olleh dlrow";

const str5 = "abc def ghi";
const expected5 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @return {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    splitStr = str.split(" ")
    secArr = []
    newStr = ""    
    for(var i = 0; i < splitStr.length; i++) {
        secSplit = splitStr[i].split("")
        for(var j = 0;j < secSplit.length/2 ;j++) {
            temp = secSplit[secSplit.length-1-j]
            secSplit[secSplit.length-1-j] = secSplit[j]
            secSplit[j] = temp
            splitStr[i] = secSplit
        }
    splitStr[i] = splitStr[i].join("")
    }
    newStr = splitStr.join(" ")
    return newStr
}

console.log(reverseWords(str4))

// function reverseWords(str) {
//     var wordStr = str.split("").reverse().join("").split(" ").reverse().join(" ");
//     return(wordStr)
// }


/*****************************************************************************/