/* 
    Given an array of objects, a searchFor string, and searchBy key that exists in the object
    return a new array of only those objects whose value for the given key starts with the given search string
    You can assume the key will exist on the object and the value of that key will be a string
    Bonus: make the search case insensitive
    Bonus: re-write it with functional programming in mind, using built in methods
    Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
        - you can assume the searchMethod will be valid
*/
// EXAMPLE:
const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
    {
        firstName: "Gene",
        lastName: "Simmons"
    }
];
    
const searchFor1 = "jo";
const searchBy1 = "firstName";
const expected1 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
];
function filterByKey(items, searchFor, searchBy){
    const output = []
    for(item of items) {
        if(item[searchBy][0].toUpperCase() == searchFor[0].toUpperCase()) {
            let flag = true;
            for(let i = 1; i<searchFor.length;i++) {
                if(item[searchBy][i].toUpperCase() != searchFor[i].toUpperCase()) {
                    flag = false
                    break;
                }
            }
            if(flag){
                output.push(item);
            }
        }
    }
    return output;
}

console.log(filterByKeyBonus3(people,searchFor1,searchBy1))
const searchForBonus = "e";
const searchByBonus = "firstName";
const searchMethodBonus = "endsWith";
const expectedBonus = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "Gene",
        lastName: "Simmons"
    }
]
function filterByKeyBonus3(items, searchFor, searchBy, searchMethod=null){
    const output = []
    if(searchMethod){
        return items.filter(item => item[searchBy].toUpperCase()[searchMethod](searchFor.toUpperCase()))
    } else {
        for(item of items) {
            if(item[searchBy][0].toUpperCase() == searchFor[0].toUpperCase()) {
                let flag = true;
                for(let i = 1; i<searchFor.length;i++) {
                    if(item[searchBy][i].toUpperCase() != searchFor[i].toUpperCase()) {
                        flag = false
                        break;
                    }
                }
                if(flag){
                    output.push(item);
                }
            }
        }
        return output;
    }
}

