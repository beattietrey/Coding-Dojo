/* 
    Given in an interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters
    What is it about a string that makes it possible for it to be a palindrome?
*/
const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

function canStringBecomePalindrome(str) {
    const dict = {}
    for(let letter of str) {
        letter in dict ? dict[letter]++ : dict[letter] = 1
    }
    let count = 0;
    for(letter in dict) {
        if(dict[letter] % 2 != 0){
            count++
            if(count > 1) return false
        }
    }
    return true
}


console.log(canStringBecomePalindrome(str5))