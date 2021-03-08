var myAge = 19;

var ageToDrink = 21;
var ageToSmoke = 18;
var ageToWatchRRatedMovie = 17;
var ageToHangOutAtMallAlone = 13;

if(myAge >= ageToHangOutAtMallAlone) {
    console.log("Go get yourself a pretzel!")
}
else{
    console.log("Go home kid")
}

// only checks one thing and answers

if(myAge >= ageToSmoke) {
    console.log("here's a cigar")
}
if(myAge >= ageToDrink) {
    console.log("here's a drink")
}
else{
    console.log("Go home kid")
}

//checks and answers both statements

if(myAge >= ageToDrink) {
    console.log("Here's a drink")
}
else if(myAge >= ageToSmoke) {
    console.log("Here's a cigar")
}
else {
    console.log("Go home kid.")
}

//checks top down until one of the conditions is met, then gives an answer, ignoring everything after