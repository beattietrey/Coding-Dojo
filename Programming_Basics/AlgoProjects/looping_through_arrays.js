
// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

// Challenge 1:

function printNumbers(arr) { 
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}


// Challenge 2:

function sumNum(arr) {
    var sum = 0;
    for(var i = 0; i< arr.length; i++) {
        sum = sum + arr[i];
        console.log(arr[i]);
        console.log("sum: " + sum);
    }
}

// Challenge 3:

function biggerThanFive(arr) {
    for(i = 0; i < arr.length; i++){
        if(arr[i] < 5) {
            arr[i] = "No Dice"
        }
        else if(arr[i] > 5) {
            console.log(arr[i])
        }
    }
}

