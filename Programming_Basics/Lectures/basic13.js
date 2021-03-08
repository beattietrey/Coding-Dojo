// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y. 

function returnArrayCountGreaterThanY(arr, y) {
    var count = 0
    for(var i = 0; i< arr.length; i++) {
        if(arr[i] > y) {
            count++
        }
    }
    console.log(count)
}


// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average. 

// Pseudocode
// Create a function that takes in an array
// Need an array for a parameter
// Add all the numbers and divide by the number of values
// Need a sum variable
// Need a loop, add each value to sum
// Divide the sum by the length of the array

function printAverageOfArray(arr) {
    if(arr.length > 0){ // used to specify that the arr must have data (Edge Case)
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i]; // sum = sum + arr[i]
        }
        console.log(sum/arr.length)
    }
    else {
        console.log("Array must contain values")
    }
}













// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero. 


function zeroOutArrayNegativeVals(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0
        }
    }
    console.log(arr)
    return arr
}






var arr1 = [1,2,-3,4,5,6,-7,8,9,11,65,87,99]

zeroOutArrayNegativeVals(arr1)










// printAverageOfArray(arr1)
// returnArrayCountGreaterThanY(arr1, 5)