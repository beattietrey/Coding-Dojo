// For Loops
// D.R.Y. Philosophy - Don't Repeat Yourself

// 1. Initilialization (Industry standard is "i" for index)
// 2. Conditionals (or Escape Clause)
// 3. Increment or Decrement

// for(var i = 1;i <= 10; i++) {
//     // code to be executed
//     if (i === 2) {
//         console.log("My favorite number is 2");
//         // continue - keeps going
//         // break - ends loop
//     }
//     else{
//         console.log(i);
//     }
// }

// a single equal assigns a value

// a double equal converts both sides of the operater to the same datatype and checks the values

// a triple equal checks both the datatype and value. Best to use as default

// Modulo or Modulus  = % = returns a remainder

// if(4 % 2 === 0) {
//     console.log("Is a multiple.");
// } 

// for(var i = 1;i <= 10; i++) {
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }

// Print off numbers from 1 - 20 in a for loop. Instead of any multiples of 3, print out the string "Fizz"

for(var i = 1; i <= 20; i++) {
    if(i % 3 === 0) {
        console.log("Fizz");
    }
    else{
        console.log(i)
    }
}

for( i = 1; i <= 20; i++) {
    if(i % 3 ===0) {
        console.log("Fizz")
    }
    else if(i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i)
    }
}

for( i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz")
    }
    else if(i % 3 ===0) {
        console.log("Fizz")
    }
    else if(i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i)
    }
}
