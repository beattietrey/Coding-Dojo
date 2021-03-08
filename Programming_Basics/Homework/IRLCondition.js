var subject = "Why are "
var myDogs = "my dogs";
var mood = " being annoying?"
var waterDish = "full";
var foodBowl = "full";
var hoursPlayed = 3;
var minutesSinceOutside = 2;

irlArr = ["Why are ", "my dogs ", "being annoyed?","full", "full", 3, 2]

console.log(irlArr[0], irlArr[1], irlArr[2])

if (irlArr[3] == "empty") { // Could be full or empty
    console.log("They are thirsty!")
}
else if (foodBowl == "empty") {  // Could be full or empty
    console.log("They are hungry!")
}
else if (minutesSinceOutside > 15) { // If it has been more than 15 minutes, they probably want to go out
    console.log("They want to go outside!")
}
else if (hoursPlayed < 24) { // Any time less than every hour of every day isn't enough
    console.log("There is never enough playtime...")
}
else { // This response will not be used. 
    console.log("Who knows what it could be?!")
}