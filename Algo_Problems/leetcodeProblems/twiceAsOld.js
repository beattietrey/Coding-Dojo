// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(fatherAge, sonAge){
    let counter = 0
    if(fatherAge < sonAge * 2){
        while (sonAge != fatherAge / 2) {
            counter++
            sonAge-=1
            fatherAge-=1
        }
        return counter
    } else if(fatherAge > sonAge * 2){
        while (sonAge != fatherAge / 2) {
            counter++
            sonAge+=1
            fatherAge+=1
        }
        return counter
    } else {
        return 0
    }
}