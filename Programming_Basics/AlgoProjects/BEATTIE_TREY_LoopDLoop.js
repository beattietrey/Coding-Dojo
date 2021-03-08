// We know we need a loop, because the device will operate at regular intervals for a set period of time
//The starting point of the loop is 2
//The end point of the loop is 6
//The mile count reaches 6
//It needs to increment by 2
//We need a variable for miles run

console.log("Inital Test")
for(var milesRun = 2; milesRun < 6; milesRun += 2) {
    console.log("Here's a piece of candy.")
}


// stretch 1 = every 2 miles AND speed over 5.5 mph
var speed = 5.6

console.log("Stretch 1")
for(var milesRun = 2; milesRun < 6 && speed > 5.5; milesRun += 2) { 
    console.log("Here's a piece of candy.")
}
// above code will return a string for each piece of candy 
var speed = 5.6;
var milesRun = 0;
var piecesOfCandy = 0;
var x = speed

console.log("Stretch 1 - 2nd Attempt")
function candyRun(x) {
    for(milesRun = 2; milesRun < 6; milesRun +=2) {
        if(x >= 5.5) {
            piecesOfCandy += 1
        }
    }
    console.log(piecesOfCandy)
}

candyRun(speed);

// Above code will return the number of pieces of candy that the runner receives in total.