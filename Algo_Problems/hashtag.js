// function generateHashtag (str) {
//     if(str.length < 1) {
//       return false
//     } else {
//       let output = "#"
//       for(let i = 0; i < str.length; i++){
//         if(i==0 && str[i] != "#") {
//           output+=str[i].toUpperCase()
//         } else if (str[i-1] == " "){
//           output+=str[i].toUpperCase()
//         } else if (str[i] != " " && str[i] != "#") {
//           output+=str[i]
//         }
//       }
//       if(output.length > 140 || output.length < 2) {
//         return false
//       } else {
//         return output
//       }
//     }
//   }

//   console.log(generateHashtag("Codewars"))

  function hourglassSum(arr) {
    let checkArr = []
    for(var i = 0; i <=3; i++){
        for (var j = 0; j <= 3; j++){
            let push = arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+1][j+1] + arr[i][j+2] + arr[i+1][j+2] + arr[i+2][j+2]
            checkArr.push(push)
        }
    }
    let max = checkArr[0]
    for(var i = 1; i < checkArr.length; i++){
        if(checkArr[i] > max) {
            max = checkArr[i]
        }
    }
    return max
}
let arr = [[1,2,3,4,5,6], [2,3,4,5,6,7], [3,4,5,6,7,8], [4,5,6,7,8,9,], [1,1,1,1,1,1], [0,0,0,0,0,0]]
console.log(hourglassSum(arr))