// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 

// function squareArrayVals(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * arr[i]
//     }
//     console.log(arr)
// //     return arr
// // }

// // // squareArrayVals([1,2,3,4,5]);

// // // // 9. Greater than Y
// // // ReturnArrayCountGreaterThanY(arr, y)
// // // Given an array and a value Y, count and print the number of array values greater than Y. 

// function returnArrayCountGreaterThanY(arr,Y) {
//     var count = 0;
//     var newArr =[]
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > Y) {
//             newArr.push(i);
//             count = count + 1;
//         }
//     }
//     console.log(count);
//     console.log(newArr);
// }

// returnArrayCountGreaterThanY([7,4,9,1,-3],2);


// 4. Iterate and Print Array
// Iterate through a given array, printing each value. 
// PrintArrayVals(arr)


// function printArrayVals(arr) {
//     for(var i = 0;i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// printArrayVals([4,7,8,1])


// 2. Print Odds 1-255
// PrintOdds1To255()
// // Print all odd integers from 1 to 255. 

// function printOdds1To255() {
//     for (var i = 1; i <= 255; i++) {
//         if(i % 2 !== 0) {
//             console.log(i)
//         }
//     }
// }

// printOdds1To255()

// 3. Print Ints and Sum 0-255
// // PrintIntsAndSum0To255()
// // Print integers from 0 to 255, and with each integer print the sum so far. 

// function printIntsAndSum0To255() {
//     var sum = 0;
//     for(var i = 0;i <= 255;i++) {
//         console.log(i);
//         sum += i;
//         console.log(sum)
//     }
// // }

// // printIntsAndSum0To255()


// // 5. Find and Print Max
// // printMaxOfArray(arr)
// // Given an array, find and print its largest element. 

// function printMaxofArray(arr) {
//     var max = arr[0];
//     for (var i = 1;i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     console.log(max)
// }    



// printMaxofArray(arr1)

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).  


// function returnOddsArray1to255() {
//     var arr = [];
//     for (var i = 1; i <= 255; i+=2) {
//         arr.push(i);
//     }
//     console.log(arr)
//     return arr
// }

// returnOddsArray1to255()

// function printMaxMinAverageArrayVals(arr) {
//     var newArr = [arr[0],arr[0]]
//     var sum = arr[0];
//     for (var i = 1;i < arr.length; i++) {
//         if(arr[i] > newArr[0]) {
//             newArr[0] = arr[i]
//         }
//         if(arr[i] < newArr[1]) {
//             newArr[1] = arr[i]
//         }
//         sum += arr[i];
//     }
//     newArr.push(sum/arr.length)
//     console.log(newArr)
// } 


// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// // Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

// function shiftArrayValsLeft(arr) {
//     for (var i = 1;i < arr.length; i++) {
//         arr[i - 1] = arr[i];
//     }
//     arr[arr.length-1] = 0;
//     console.log(arr)
// }

// arr1 = [5,6,7,8]


// shiftArrayValsLeft(arr1)


// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// // Given an array of numbers, replace any negative values with the string 'Dojo'.

// function swapStringForArrayNegativeVals(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = "Dojo";
//         }
//     }
//     console.log(arr)
// }

// swapStringForArrayNegativeVals([-2, 4, 7, -13, 9])