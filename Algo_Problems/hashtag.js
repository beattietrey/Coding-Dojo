// turn string into hashtag, all first letters must be capitalized, must start with #

function generateHashtag (str) {
    if(str.length < 1) {
      return false
    } else {
      let output = "#"
      for(let i = 0; i < str.length; i++){
        if(i==0 && str[i] != "#") {
          output+=str[i].toUpperCase()
        } else if (str[i-1] == " "){
          output+=str[i].toUpperCase()
        } else if (str[i] != " " && str[i] != "#") {
          output+=str[i]
        }
      }
      if(output.length > 140 || output.length < 2) {
        return false
      } else {
        return output
      }
    }
  }

  console.log(generateHashtag("Codewars"))

