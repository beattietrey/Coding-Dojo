// Values greater than second\

// Write a function that accepts any array and returns a new array with the array values greater than it's second value and print how many values this is. What will you do do if the array is only one element long?

function greaterThanSecond(arr) {
    var count = 0;
    var newArr = [];
    if(arr.length < 2){
        console.log("Array is not long enough")
        
    }
    else{
        for(var i = 0;i < arr.length; i++) {
            if(arr[i] > arr[1]) {
                newArr.push(arr[i]);
                count++
        }
    }
    console.log(count)
    return newArr
    }
}


console.log(greaterThanSecond([1,5,8,7]))
