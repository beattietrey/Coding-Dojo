/* 
  Parens Valid

	Given an str that has parenthesis in it
	return whether the parenthesis are valid
*/

// function that loops through a string
// var countOpen and var countClose



const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    var count = 0
   
    for(var i = 0;i < str.length;i++) {
        if(count < 0) {
            return false
        }
        if(str[i] == "(") {
            count++
        }
        if(str[i] == ")") {
            count--
        }
    }
    if(count == 0) {
        return true
    }
    else {
        return false
    }
}
console.log(parensValid(str2))
module.exports = { parensValid };

*****************************************************************************/
/* BONUS ALGO ****************************************************************/
/*****************************************************************************/
/* 
  Braces Valid

  Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

// function that loops through a string
// variables for each bracket, open and close
// verify that each opening bracket has a closing bracket
// verify that a closing bracket doesn't come before an opening
// verify that any closing bracket doesn't break the connection between an open and close of another kind
//      while loop to run through opening brackets?


const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    var countPar = 0
    var countBrack = 0
    var countCurly = 0
    for(var i = 0; i < str.length; i++) {
        if(countPar < 0 || countBrack < 0 || countCurly < 0) {
            return false
        }
        if(str[i] == "(") {
            var j = i
            while (j != ")" || j < str.length) {
                
            }

    }
}

module.exports = { bracesValid };