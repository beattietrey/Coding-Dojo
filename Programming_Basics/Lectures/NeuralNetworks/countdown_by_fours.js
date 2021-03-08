// Countdown by Fours
// Print positive numbers starting with 2020, counting down by fours (excluding 0). 
// //     Challenge: Do this WITHOUT a for loop


// var i = 2020

// while(i > 0) {
//     if(i % 4 === 0) {
//     console.log(i);
//     }
//     i--;
// }



// Level Up: Flexible Countdown 
// Based on Countdown by Fours, write a function that, given parameters of "lowNum", 
// "highNum", and "mult," print all multiples of "mult" from "highNum" to "lowNum" 
// using a for loop. 
// Example: flexCount(2,9,3), it will print 9 6 3 on successive lines.

// function countdown(lowNum, highNum, mult) {
//     for(var i = highNum; i >= lowNum; i--) {
//         if(i % mult ===0) {
//             console.log(i);
//         }
//     }
// }

// countdown(2,9,3)

// Sensei Bonus: The Final Countdown
// This is based on "Flexible Countdown." The parameter names are not as helpful, but the 
// problem is essentially identical; don't be thrown off! Given 4 parameters (param1, param2,
// param3, param4), print the multiples of param1, starting at param2, and extending to param3. 
// There's one exception: if a multiple is equal to param4, then skip it (don't print it). Do this 
// using a while loop. 
// Example: Given (3,5,17,9), the output should be 6,12,15 on successive lines, because 6, 12, and 15
// are multiples of 3, between 5 and 17, and excludes the value of 9.

// No empty if statements, rather use an inclusive parameter for your if statement that allows you to you do what you need

function sensei(param1,param2,param3,param4) {
    var i = param2;
    while(i !== param3) {
        if(i % param1 === 0 && i !== param4){
            console.log(i);
        }
        if(param2 > param3){
            i--;
        }
        else if(param2 < param3){
            i++;
        }
    }
    if(param3 % param1 === 0) {
        console.log(param3)
    }
}

sensei(3,5,17,9);


// for(var i = 0; i < 10 ; i++) {
//     console.log(i)
// }

// // equivalent in while loop

// while(i < 10)    {
//     console.log(i) ;

//     i++;
// }

// //another example

// var userChoice = false

// while(!userChoice) {
//     console.log("I'm sorry, that input is incorrect. Please try again.")
//     //sample code to retrieve  a user's input
//     if()
// }


