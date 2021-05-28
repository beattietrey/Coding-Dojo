/* 
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time
*/
const S1 = "ab#c";
// a -> ab -> a -> ac
const T1 = "ad#c";
// a -> ab -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
// a -> ab -> a -> 
const T2 = "c#d#";
// c ->  -> d -> 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a ->  ->  -> c
const T3 = "#a#c";
//  -> a ->  -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a ->  -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
    let newS = ""
    let newT = ""
    for(let i = 0; i < S.length; i++){
        if(S[i] === "#") {
            newS = newS.slice(0,newS.length-1)
        } else {
            newS+=S[i]
        }
        if(T[i] === "#") {
            newT = newT.slice(0, newT.length-1)
        } else {
            newT+=T[i]
        }
    }
    return newS === newT
}

console.log(backspaceStringCompare(T3, T1))