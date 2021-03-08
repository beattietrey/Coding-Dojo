// Let's say we had a challenge to have a function that calculate the sum of all even numbers between 1 and a given number (parameter of a function).
// You come up with the follwing solution, but find it isn't working.

//  The sum of all even numbers, 1 through 10. Sum of all evens is 30


// console.log("Before the function") // used to define location of function in log

// debug from outside --> in

function evensToNum(num) {
    var sum = 0;
    for(var i = 1;i <= num; i++) {
        // console.log(sum) // wasn't working prior, so changed to below
        // console.log("Sum on iteration " + i + ":" + sum)
        if(i % 2 === 0) {
            // console.log("This number should be even: " + i)
            sum += i;
        }
    }

    console.log(sum)
}

evensToNum(10);

// console.log("After the function") // used to define location of function in log










function myFoo(){
    for(var i = 0; i < 20; i++){
        console.log(i)
    }
}

myFoo();

function buyMeASnack(money) {
    var snakc;
    //execute code to go to store
    var costOfPowerBar = 3;

    if(money >= costOfPowerBar){
        money -= costOfPowerBar;
        snack = "Power Bar";
    }
    return snack
    console.log("Anything after return is not included, because return ends the function")
}

//assigns the data that returned by function to this variable
var powerBarThatCisoBoughtMe = buyMeASnack(5);

console.log(powerBarThatCisoBoughtMe)