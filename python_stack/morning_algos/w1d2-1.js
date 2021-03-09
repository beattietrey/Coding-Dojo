/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with .split first if you need to, then try to do it without
*/
/*
1. Create a function
2. Create a variable
2a. Split string into words
2b. Split words into just first letter
3. Capitalize first char of each word
4. Return the string's acronym

*/
const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @return {string} The given str converted into an acronym.
 */
// function acronymize(str) {
//     var wordList = [];
//     var letterList = [];
//     var acronymArr = "";
//     wordList = str.split(" ")
//     for (let i = 0; i < wordList.length; i++) {
//         if (wordList[i] !== " ") {
//             letterList = wordList[i].split("");
//             acronymArr+=letterList[0];
//         }
//     }
//     return acronymArr;
// }

function acronymize(str) {
    var wordList = "";
    for(var i = 0; i < str.length; i++) {
        if(str[i] === " "){
            wordList+=str[i+1]
        }

    }
    return wordList
}

// module.exports = { acronymize };

// Test Cases
console.log(acronymize(str1));
console.log(acronymize(str2));
