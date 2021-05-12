/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
        - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
        - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization:
        - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg

    EXAMPLE:
    let nums1 = [4,1,2,3,4];
    let nums2 = [1,2,3,5,5,2];

    symmetricDifference(nums1, nums2) should return [4,5] because 4 is only in nums1, 5 is only in nums2, 
    and every other value can be found in the other array as well.
*/
function symmetricDifference(setA, setB){
    let diffArr = []
    let sameArr = []
    for(let i = 0; i < setA.length;i++) {
        if(diffArr.indexOf(setA[i]) == -1) {
            if (setB.indexOf(setA[i]) == -1) {
                diffArr.push(setA[i])
                console.log("did you get here?")
            }
        }
    }
    for(let i = 0; i < setA.length;i++) {
        if(diffArr.indexOf(setB[i]) == -1) {
            if (setA.indexOf(setB[i]) == -1) {
                diffArr.push(setB[i])
            }
        }
    }

    console.log(diffArr)
    console.log(sameArr)
}

let nums1 = [4,1,2,3,4];
let nums2 = [1,2,3,5,5,2];

symmetricDifference(nums1, nums2)