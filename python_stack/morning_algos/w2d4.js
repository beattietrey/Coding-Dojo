// /* 
//   String: Rotate String
//   Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
// */

const str1 = "Hello World";
const rotateAmnt1 = 0;
const expected1 = "Hello World";

const str2 = "Hello World";
const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const str3 = "Hello World";
const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const str4 = "Hello World";
const rotateAmnt4 = 4;
const expected4 = "orldHello W";

// /**
//  * Rotates a given string's characters to the right by the given amount,
//  * wrapping characters to the beginning.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @param {number} n The amount of characters in the given str to rotate to the
//  *    right.
//  * @return {string} The string rotated by the given amount.
//  */

function rotateStr(str, n) {
    var strArr = str.split("")
    console.log("strArr is",strArr)
    for(var i = 0; i < n ; i++){
        var temp = strArr[strArr.length-1]
        console.log("temp is " + temp)
        strArr.pop()
        console.log(strArr)
        strArr.unshift(temp)
        console.log("after shift", strArr)
    }
    str = strArr.join("")
    return str
}

// console.log(rotateStr(str3,rotateAmnt3))



// */ 
//   Create the function isRotation(str1,str2) that
//   returns whether the second string is a rotation of the first.
// */

const strA1 = "ABCD";
const strB1 = "CDAB";
const expectedA1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const expectedA2 = false;
// Explanation: all same letters in 2nd string, but out of order

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @return {boolean} Whether the second string is a rotated version of the 1st.
 */
 function isRotation(s1, s2) {
    for(var i = 1; i <= s1.length;i++) {
        if(s1 == rotateStr(s2,i)) {
            return true
        }
    }
    return false
}

console.log(isRotation(strA1, strB1))