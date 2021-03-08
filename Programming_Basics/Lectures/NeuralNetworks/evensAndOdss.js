// Evens and Odds!

// Create a function that accepts an array of numbers. Every time
// that array has 3 odd values in a row, print "That's odd!" Every 
// time the array has 3 even values in a row, print "Even more so!"

// Only print the messages when it's 3 in a row. If there are 5 
// consecutive odd values, for example, it should only print the 
// message one time. If there are 7 consecutive even values, it should
// print the message two times.


// EXAMPLE:
// evensAndOdds([1,3,5,7,9,2,8,4,6,7,3,8]);

// Should print:
// That's odd!
// Even more so!

function evensAndOdds(arr) {
    var evenCount = 0;
    var oddCount = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenCount++;
            oddCount = 0;
            if(evenCount === 3) {
            console.log("Even more so!");
            evenCount = 0;
            }
        }
        else if(arr[i] % 2 !== 0) {
            oddCount++;
            evenCount = 0;
            if(oddCount === 3) {
            console.log("That's odd!");
            oddCount = 0;
            }
        }
    }
}


evensAndOdds([1,3,5,7,9,2,8,4,6,7,3,8])