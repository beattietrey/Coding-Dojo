// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    let min = 0
    let max = 0
    let rest = 0
    let count = 0
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[min]) {
            min = i
        } else if (arr[i] > arr[max]) {
            max = i
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(count >= 3){
            break
        } else if(i != min && i != max){
            rest+=arr[i]
            count++
        }
    }
    max = rest + arr[max]
    min = rest + arr[min]
    let returnString = min.toString()
    returnString+= " "
    returnString+= max.toString()
    console.log(returnString)
}