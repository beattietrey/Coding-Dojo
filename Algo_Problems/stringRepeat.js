/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(str, num) {
    let newStr = ""
    for(let i = 1; i <= num; i++){
        newStr+=str
    }
    return newStr
}