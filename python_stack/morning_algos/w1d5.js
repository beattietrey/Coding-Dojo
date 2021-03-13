/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

  const keys1 = ["abc", 3, "yo"];
  const vals1 = [42, "wassup", true];
  const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };
  
  /**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @return {Object} The object with the given keys and values.
   */
  function zipArraysIntoMap(keys, values) {
    var map = {}
    for(var i = 0;i < keys.length;i++) {
        map[keys[i]] = values[i]
    }
    return map
  }

console.log(zipArraysIntoMap(keys1,vals1))