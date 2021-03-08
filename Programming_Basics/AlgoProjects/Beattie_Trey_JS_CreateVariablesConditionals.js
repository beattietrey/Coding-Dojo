var riderHeight = 45 // must be at least 52 inches
var riderAge = 10//must be at least 10 years of age
    
    if (riderHeight > 52 && riderAge >= 10) {
        console.log("Get on that ride, kiddo!") //conditional on both variable being true
    }
    else if (riderHeight >= 52 || riderAge >= 10) {
        console.log("Get on that ride, bud!") // conditional on one variable being true, changed kiddo to bud, to allow verification of a single variable being correct
    }
    else {
        console.log("Sorry kiddo. Maybe next year.") //neither variable is true
    }
