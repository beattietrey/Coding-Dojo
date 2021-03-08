// https://www.guru99.com/stack-vs-heap.html

// Arrays
// Reference Dataypes


// var myName = "Trey Beattie";
// var myLocation = "Tacoma";
// var myAge = 30;

// // arrays can store collections of data
// // arrays can hold more than one type of data

// var myInfo = ["Trey Beattie", "Tacoma", 30]
// myInfo[3] = "Black";
// myInfo[2] = 31;
// myInfo[10] = "56th St";
// myInfo.push("Mischief"); // adds to end of array
// myInfo.pop() // removes last item from array

// .pop and .push are "methods" for arrays
// things like .log and .warn are methods for the console
// index of an array always starts with 0, the first input value

// var a = [1,2,3,4];
// var b = a;
// b[4] = 5

// b = 25

// console.log(a);
// console.log(b);
// console.warn("This is a warning!");

// console.log(myInfo[1]); // index of value in the array that I am trying to log

// for(var i = 0; i < myInfo.length; i++) {
//     console.log(myInfo[i]);
// }


// Find and print the largest element in an array
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.


// First write out pseudocode - a plan of attack in english
// Write a function called "PrintMaxOfArray(arr)" that takes an array as an argument
// Create a variable called max to keep track of maximum value AND set it to the first value in the array
// Create a for loop that looks at each element in the array.
// Gonna need an if statement to compare each value against the current max value
// If a value is larger, make that the new max.
// print max after the for loop


function printMaxOfArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max); // used to print the value
    return max; // used to set the function to this value
}
console.log

printMaxOfArray([4, 7, 1, 9, 3, 6, 1, 0]) // sets function to hold returned value AND any logs inside
console.log(printMaxOfArray([4, 7, 1, 9, 3, 6, 1, 0]))  // logs the returned value if you don't put a log in the function


