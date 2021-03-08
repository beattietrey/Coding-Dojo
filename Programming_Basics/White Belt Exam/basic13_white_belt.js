

// 1. Print 1-255
// Print1To255()
// Print all the integers from 1 to 255. 

function print1To255() {
    for(var i = 1; i <= 255; i++) {
        console.log(i)
    }
}


// 2. Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255. 

function printOdds1To255() {
    for(var i = 1; i <= 255; i+=2) {
        console.log(i)
    }
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 

function printIntsAndSum0To255() {
    var sum = 0;
    for(var i = 0; i <= 255; i++) {
        sum+=i;
        console.log("The number is " + i + ". The sum is " + sum +".")
    }
}


// 4. Iterate and Print Array
// Iterate through a given array, printing each value. 
// PrintArrayVals(arr)

function printArrayVals(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log("Value of Index " + i + " is: " + arr[i])
    }
}

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element. 

function printMaxofArray(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    console.log("Max of the array is: " + max)
}

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average. 

function printAverageOfArray(arr) {
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++) {
        sum+=arr[i]
    }
    console.log("The average of the array is " + sum/arr.length)
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).  

function returnOddsArray1To255() {
    var newArr = []
    for(var i = 1; i <= 255; i+=2) {
        newArr.push(i)
    }
    return newArr
}


// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 

function squareArrayVals(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i]*=arr[i]
    }
    return arr
}

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y. 

function returnArrayCountGreaterThanY(arr,y) {
    var count = 0;
    for( var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            count++
        }
    }
    console.log("The number of values greater than " + y + " is: " + count)
    return count
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero. 

function zeroOutArrayNegativeVals(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr
    
}
// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

function printMaxMinAverageArrayVals(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
        sum+=arr[i]
    }
    console.log("The max is: " + max + ". The min is: " + min + ". The average is " + sum/arr.length)
}


// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = 0
    return arr
}

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapStringsForArrayNegativeVals(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    return arr
}


arr = [-4,-9,23,17,4,8,45] //sample array for use


