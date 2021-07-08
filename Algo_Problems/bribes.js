// A queue of people each have number tags with their original position in line. They can bribe at most 2 people to move themselves farther up the queue. Determine how many bribes were necessary to get the output. If someone bribed more than twice, print too chaotic as well

function minimumBribes(q) {
    let numberOfBribes = 0
    let flag = false
    let max = q[0]
    for(let i = 1; i < q.length ; i++){
        if(q[i] < max) {
            let temp = max - q[i]
            while(q[i] < max){
                if(max-q[i] > temp){
                    temp = max - q[i]
                }
                i++
            }
            numberOfBribes+= temp
            if(temp > 2){
                flag =true
            }
        } else {
            max = q[i]
        }
    }
    if(flag) {
        console.log("Too Chaotic")
    } else {
        console.log(numberOfBribes)
    }
}
// function minimumBribes(q) {
//     let flag = false
//     let offset = 1
//     for(let i = 0; i < q.length;i++){
//         console.log(i+offset)
//         if(q[i] != i+offset){
//             offset-=1
//             if(q[i]-i+offset > 2) {
//                 flag=true
//             }
//         }
//     }
//     if(flag) {
//         console.log("Too Chaotic")
//     } else {
//         console.log(offset - 1)
//     }
// }

let q1 = [1, 2, 5, 3, 4, 7, 8, 6]
// expected output = 4
let q2 = [5, 1, 2, 3, 7, 8, 6, 4]
// expected output = Too Chaotic
let q3 = [1, 2, 5, 3, 7, 8, 6, 4]
// expected output = 7
let q4 = [2, 5, 1, 3, 4]
// expected output = Too chaotic
let q5 = [2, 1, 5, 3, 4]
// expected output = 3

minimumBribes(q1)
minimumBribes(q2)
minimumBribes(q3)
minimumBribes(q4)
minimumBribes(q5)