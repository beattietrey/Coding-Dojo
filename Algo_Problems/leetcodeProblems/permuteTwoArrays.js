// There are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where .

// There will be  queries consisting of , , and . For each query, return YES if some permutation ,  satisfying the relation exists. Otherwise, return NO.

// Example
// A = [0,1]
// B = [0,2]
// k = 1

// A valid  A',B' is A' = [1,0] and B' = [0,2]:1+0 >= 1  and 0 +2 > = 1. Return YES.

function twoArrays(k, A, B) {
    let objA = {}
    let objB = {}
    for(let i = 0; i < A.length; i++){
        let minTemp = B[i]
        let indexTemp = i
        for(let j = i+1; j < B.length; j++) {
            if(minTemp + A[i] < k){
                if(B[j] + A[i] >= k){
                    indexTemp = j
                    minTemp = B[j]
                }
            } else {
                if(B[j] < minTemp && B[j] + A[i] >= k) {
                    indexTemp = j
                    minTemp = B[j] 
                }
            }
        }
        B[indexTemp] = B[i]
        B[i] = minTemp
    }
    console.log(A)
    console.log(B)
    for(let i = 0; i < A.length; i++) {
        if(!(A[i] + B[i] >= k)){
            return "NO"
        }
    }
    return "YES"
}