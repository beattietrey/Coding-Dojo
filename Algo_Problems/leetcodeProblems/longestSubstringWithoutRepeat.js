// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function(s) {
    let output = 0;
    let stringObj = {}
    for(let i = 0; i < s.length; i++) {
        let tempOutput = 1
        stringObj[s[i]] = 1;
        let j = i+1
        while(!(s[j] in stringObj) && j < s.length) {
            stringObj[s[j]] = 1;
            j++
            tempOutput++
        }
        if(tempOutput > output) {
            output = tempOutput
        }
        stringObj = {}
    }
    
    return output
};

console.log(lengthOfLongestSubstring("dvdf"))
