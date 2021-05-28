/* 
    Given two strings, version1, and version2, both representing version numbers
    If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
    Helpful methods:
        - .split(characterToSplitOn)
        - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
        - .parseInt
        - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
    Bonus, solve without .split
*/
const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;

function compareVersionNumbers(v1, v2) {
    let v1Arr = v1.split(".") 
    let v2Arr = v2.split(".") 
    for(let i = 0; i < v1Arr.length; i++) {
        if(parseInt(v1Arr[i]) > parseInt(v2Arr[i])) {
            return 1
        } else if (parseInt(v2Arr[i])> parseInt(v1Arr[i])) {
            return -1
        }
    }
    if(v1Arr.length > v2Arr.length) {
        return 1
    } else if (v2Arr.length > v1Arr.length) {
        return -1
    } else {
        return 0
    }
}

function compareVersionNumbersNoSplit(v1, v2) {
    let j = 0
    for(let i = 0; i < v1.length; i++) {
        let temp1 = ""
        let temp2 = ""
        while(v1[i] != "." && i < v1.length) {
            temp1+=v1[i]
            i++
        }
        while(v2[j] != "." && j < v2.length) {
            temp2+=v2[j]
            j++
        }
        j++
        if(parseInt(temp1) > parseInt(temp2)) return 1
        else if(parseInt(temp2) > parseInt(temp1)) return -1
        if(i >= v1.length && j < v2.length) return -1
        else if(j >= v2.length && i < v1.length) return 1
        else if(i >= v1.length && j >= v2.length) return 0
    }
}

console.log(compareVersionNumbers("8.056.93", "8.56.93.98"))
console.log(compareVersionNumbersNoSplit("8.56.093","8.56.93.98"))