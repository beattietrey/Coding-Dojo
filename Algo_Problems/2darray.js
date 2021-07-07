// Find largest sum value of hourglass in a 6x6 grid

function hourglassSum(arr) {
    let checkArr = []
    for(var i = 0; i <=3; i++){
        for (var j = 0; j <= 3; j++){
            let push = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]            
            checkArr.push(push)
        }
        console.log("__________")
    }
    let max = checkArr[0]
    for(var i = 1; i < checkArr.length; i++){
        if(checkArr[i] > max) {
            max = checkArr[i]
        }
    }
    return max
}
let arr1 = [
    [1,2,3,4,5,6], 
    [2,3,4,5,6,7], 
    [3,4,5,6,7,8], 
    [4,5,6,7,8,9,], 
    [1,1,1,1,9,1], 
    [0,0,0,9,9,117]]

let arr2 =[
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0 ,2, 4 ,4, 0],
[0, 0 ,0 ,2 ,0, 0],
[0 ,0, 1 ,2, 4 ,0]]
// console.log(hourglassSum(arr1))
console.log(hourglassSum(arr2))