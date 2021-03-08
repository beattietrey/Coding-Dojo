var z = 0; // 5 gallon jug
var x = 3; // 3 gallon jug

function remainder(y) {
    if(y >= 5) {
        x = z- 5;
    }
    console.log("overflow")
    return x;
}

while (z == 4) {
    z = z + x;
    console.log("add 3 to 5");
    if (x = 0){
        x = 3;
    }
    else {
        x = remainder(z);
    }
}
console.log("4 Gallons! Put them on the scale")
