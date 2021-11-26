// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    let obj1 = {}
    for(let i = 0; i < str1.length; i++){
      if(str1[i] in obj1){
        obj1[str1[i]]+=1
      } else {
        obj1[str1[i]]=1
      }
    }
     for(let j = 0; j < str2.length; j++) {
       if(str2[j] in obj1){
         obj1[str2[j]]-=1
         if(obj1[str2[j]] < 0 ){
          return false
        }
       } else {
         return false
       }
     }
     return true
   }