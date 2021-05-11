/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal

    EXAMPLE:
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ]

    diagonalDifference(matrix) should return 2, because (1 + 5 + 9) - (3 + 5 + 9) has an absolute value of 2
*/
function diagonalDifference(sqrMatrix) {
    let topLeft = 0;
    let topRight = 0
    let j = sqrMatrix.length-1
    for(let i = 0;i < sqrMatrix.length; i++) {
        topLeft+=sqrMatrix[i][i]
        topRight+=sqrMatrix[i][j]
        j--
    }
    return Math.abs(topLeft-topRight)
}


console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]))

/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    const nums1 = [1, 2, 2, 2, 7];
    const nums2 = [2, 2, 6, 6, 7];

    orderedMultiSetUnion(nums1, nums2) should return [1,2,2,2,6,6,7]
*/
function orderedMultiSetUnion(sortedA, sortedB){
    let i = 0;
    let j = 0;
    let newArr = [];
    while(i < sortedA.length && j < sortedB.length) {
        if(sortedA[i] < sortedB[j]) {
            newArr.push(sortedA[i])
            i++
        } else if (sortedB[j] < sortedA[i]) {
            newArr.push(sortedB[j])
            j++
        } else if (sortedA[i] === sortedB[j]) {
            newArr.push(sortedA[i])
            i++;
            j++;
        }
    }
    while(i < sortedA.length) {
        newArr.push(sortedA[i])
        i++
    }

    while(j < sortedB.length) {
        newArr.push(sortedB[j])
        j++
    }

    return newArr
}

console.log(orderedMultiSetUnion([1, 2, 2, 2, 7, 10,11,13,19],[2, 2, 6, 6, 7,19]))