
/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 1255;
const expected4 = 4

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    while(num.toString().length > 1){
    if (num.toString().length == 1){
        return num 
    }
    else{
        var str = num.toString()
        var count = parseInt(str[0])
        console.log(count)
        newnum = count + sumToOneDigit(parseInt(str.substring(1)))
        console.log('countis' + newnum)
        if(newnum.toString().length < 2) {
            return sumToOneDigit(newnum)
        }
        else{
            return newnum
            }
        }
    }
}

console.log(sumToOneDigit(num4))
// module.exports = { sumToOneDigit };