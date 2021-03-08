// Print Ints and Sum 0-255

function printIntsAndSum0to255() {
    var sum = 0;
    for(var i = 0;i<=255;i++){
        console.log(i);
        sum+=i;
        console.log(sum);
    }
}

function squarArrayVals(arr) {
    for(var i = 0;i<arr.length;i++) {
        arr[i] *= arr[i];
    }

    return arr;
}