// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

function pyramid(n) {
    let arr = []
    let i = 1
    while(i <= n){
      let tempArr = []
      for(let j = 0; j < i; j++){
        tempArr.push(1)
      }
      arr.push(tempArr)
      i++
    }
    return arr
  }