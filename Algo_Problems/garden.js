// There is a one-dimensional garden of length N. In each position of the N length garden, a fountain has been installed. Given an array a[]such that a[i] describes the coverage limit of ith fountain. A fountain can cover the range from the position max(i – a[i], 1) to min(i + a[i], N). In beginning, all the fountains are switched off. The task is to find the minimum number of fountains needed to be activated such that the whole N-length garden can be covered by water.

// Examples:

// Input: a[] = {1, 2, 1}
// Output: 1
// Explanation:
// For position 1: a[1] = 1, range = 1 to 2
// For position 2: a[2] = 2, range = 1 to 3
// For position 3: a[3] = 1, range = 2 to 3
// Therefore, the fountain at position a[2] covers the whole garden.
// Therefore, the required output is 1.

// Input: a[] = {2, 1, 1, 2, 1} 
// Output: 2


function fountains(arr) {
    let count = 0;
    let maxtemp = 0;
    // let itemp = 0;
    let rangeArray = [];
    for(let i =0; i < arr.length; i++){
        rangeArray.push([Math.max(i+1-arr[i], 1), Math.min(i+1+arr[i], arr.length)])
    }
    //find the first fountain
    while(maxtemp < arr.length){
        let mintemp = maxtemp+1;
        for (let i = maxtemp; i < rangeArray.length; i++) {
            if (rangeArray[i][0] <= mintemp){
                if (rangeArray[i][1] > maxtemp) {
                    maxtemp = rangeArray[i][1];
                }
            }
        }
        count++
    }
    console.log(rangeArray)
    console.log(count)
}


let c = [2, 1, 1, 2, 2, 1, 1, 1, 1, 5]

fountains(c)

function gardens2(arr) {
    let count = 1;
    let mintemp = 0;
    let maxtemp = Math.min(0+arr[0], arr.length-1);
    for(let i = 1; i < arr.length; i++){
        if(Math.max(i-arr[i], 0) <= mintemp && Math.min(i+arr[i],arr.length - 1) > maxtemp){
            maxtemp = Math.min(i+arr[i],arr.length - 1)
        }
        else if(i > maxtemp){
            mintemp = i;
            maxtemp = Math.min(i+arr[i], arr.length-1);
            count++
            console.log(i)
        }
        else if(Math.min(i+arr[i],arr.length - 1) > maxtemp) {
            if (Math.max(i-arr[i], 0) < maxtemp) {
                maxtemp = Math.min(i+arr[i],arr.length - 1)
                mintemp = Math.max(i-arr[i], 0)
                console.log("i is:",i)
                console.log("count is:",count)
            }
        }

        // check to see if i is outside of the current range, increase count, change min
        // check to see if max is higher, but min is greater than current mintemp, while still being within range
    }
    console.log(count)
}


function fountainActivation(locations) {
    // FountainRanges[i]: Stores the position of leftmost fountain that can be covered by water of left side of the i-th fountain, updated below on ln64
    let FountainRanges = [];


    // Stores index of leftmost fountain
    let idxLeft;
    // Stores index of rightmost fountain
    // in the range of i-th fountain
    let idxRight;

    // Traverse the array
    for (let i = 0; i < locations.length; i++) {
        idxLeft = Math.max(i - locations[i], 0);
        idxRight = Math.min(i + (locations[i] + 1), locations.length);
    //     if(FountainRanges[idxLeft]){
    //         if(FountainRanges[idxLeft] < idxRight){
    //             FountainRanges[idxLeft] = idxRight;
    //         }
    //     } else {
            FountainRanges[idxLeft] = idxRight;
        // }
    }

    console.log(FountainRanges)

    // Stores count of fountains
    // needed to be activated
    let cntfount = 1;

    // Stores index of next fountain
    // that needed to be activated
    let idxNext = 0;
    idxRight = FountainRanges[0];

    // Traverse FountainRanges[] array
    for (let i = 0; i < locations.length; i++) {
        idxNext = Math.max(idxNext, FountainRanges[i]);

        // If left most fountain
        // cover all its range
        if (i == idxRight) {
            cntfount++;
            idxRight = idxNext;
        }
    }
    return cntfount;
}
console.log(fountainActivation(c))