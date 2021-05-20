/* 
    Create a function to determine the max amount of
    servings that can be made based on a recipe and
    available ingredients.
    Input:
        - recipe object where keys are ingredient names
        and values are unit required (int)
        - available ingredients object where keys are ingredient
        names and values are unit available (int)
    Output:
        int (max servings)
    Side note (not needed for solution): Realistically, the values
    would be an object as well with the keys: unit (unit of measure), and amount.
    If the available ingredient was stored in a different unit,
    a conversion table would be needed to convert units of measure.
*/
const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200,
};

const available1 = {
    "organic fat": 99,
    "live squid": 2,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
};
const expected1 = 1;

function getMaxServings(recipe, available) {

}















function getMaxServings1(recipe, available){
    const servArr = []
    for(key in recipe) {
        servArr.push([key,available[key]/recipe[key]])
    }
    let min = servArr[0]
    for(let i = 1; i < servArr.length;i++){
        if(servArr[i][1] < min[1]){
            min = servArr[i]
        }
    }
    return min;
}



console.log(getMaxServings1(recipe1,available1))



