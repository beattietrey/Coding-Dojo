// You're given a task to write code that will print numbers from 1 to some number
// 5 different times. Each time,the number should be different. 

var num1 = 25;
var num2 = 87;
var num3 = 62;
var num4 = 100;
var num5 = 8;


// console.log("******************************")

// for(var i = 1; i <= num1; i++) {
//     console.log(i)
// }
// console.log("******************************")

// for(var i = 1; i <= num2; i++) {
//     console.log(i)
// }
// console.log("******************************")

// for(var i = 1; i <= num3; i++) {
//     console.log(i)
// }
// console.log("******************************")

// for(var i = 1; i <= num4; i++) {
//     console.log(i)
// }
// console.log("******************************")

// for(var i = 1; i <= num5; i++) {
//     console.log(i)
// }
// console.log("******************************")

// this is not D.R.Y. If you were to change the code, you would need to change each piece, one by one.


// When you define a function, you have to define the parameter, in this case "num"
function printNumbers(num) {
    console.log("******************************")
    console.log("Counting numbers from 1 to " + num)
    for(var i = 1; i <= num; i++) {
        console.log(i)
    }
    console.log("******************************")
}

printNumbers(25);
printNumbers(87);
printNumbers(62);
printNumbers(100);
printNumbers(8);

//  if I know that the function will need the same information everytime, I don't need to declare variables for that information


// Sample Output:

//Welcome to the show, Jane! I have it on record that your last name is Doe
//Welcome to the show, John! I have it on record that your last name is Smith



// when you "call" a function, you set "arguments" that are used as the parameters of the functions
function welcomeUser(firstName, lastName) {
    console.log("Welcome to the show, " + firstName + "! I have it on record that your last name is " + lastName) 
}

welcomeUser("Lebron", "James");
welcomeUser("Narciso", "Lobo");

