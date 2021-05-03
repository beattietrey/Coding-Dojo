// 1. Given
console.log(hello);                                   
var hello = 'world';   

// After Hoisting
// var hello;
// console.log(hello); logs undefined;
// hello = 'world';

// 2. Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle
// function test();
// needle = 'haystack'
// test(
// var needle
// needle = 'magnet'
//     logs 'magnet'
// ); 

// 3. Given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan
// function print()
// brendan = 'super cool'
// logs 'super cool'

// 4. Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food
// function eat()
// food = 'chicken'
// logs 'chicken'
// eat (
//     var food
//     food = 'half-chicken'
//     log 'half-chicken'
//     food = 'gone'
// )

// 5. Given
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean;
// mean is not a function
// food is not defined
// food is not defined

// 6. Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre
// function rewind()
// genre is undefined
// genre = 'disco'
// rewind {
//     var genre
//     genre = rock
//     log rock
//     genre = r&b
//     log r&b
// }
// log disco

// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// function learn()
// dojo is not defined
// dojo is not defined
// learn{
// var dojo 
// dojo = Seattle
// log seattle
// dojo = burbank
// log burbank
// }
// dojo is not defined

// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// function makeDojo()
// makeDojo(Chicago, 65) {
//     const dojo
//     dojo = {name:Chicago}
//     dojo = {name:Chicago, students:65}
//     dojo = {name:Chicago, students:65, hiring:true}
// }
// log {name:Chicago, students:65, hiring:true}
// makeDojo(Berkeley, 0) {
//     const dojo
//     dojo = {name:Chicago}
//     dojo = {name:Chicago, students:65}
//     dojo returns error, because it is a const, so can't change
// }