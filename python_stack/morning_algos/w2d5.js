/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @return {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    if( s1.length == s2.length) {
        var s1Lower = s1.toLowerCase()
        var s2Lower = s2.toLowerCase()
        var str1Obj = {}
        var str2Obj = {}
        for( var i = 0; i < s1.length;i++) {
            if(s1Lower[i] in str1Obj) {
                str1Obj[s1Lower[i]]++
            }
            else {
                str1Obj[s1Lower[i]] = 1
            }
            console.log(str1Obj)
        }
        for( var i = 0; i < s2.length;i++) {
            if(s2Lower[i] in str2Obj) {
                str2Obj[s2Lower[i]]++
            }
            else {
                str2Obj[s2Lower[i]] = 1
            }
            console.log(str2Obj)
        }
        if(str1Obj == str2Obj) {
            return true
        } 
        else{
            return false
        }
    }
    else {
        return false
    }
}

// console.log(isAnagram(strA1,strB1))

// ************************************************************

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expect1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    var i = 0;
    while( str[i] == " " ){
        str = str.substring(1)
        console.log(str)
    }
    var j = str.length-1
    while(str[j] == " ") {
        str = str.substring(0, str.length-1);        
        console.log(str)
    }
    return str
}

console.log(trim(str1))