let pal = (word) => {
    isPal = true;
    for(let i = 0; i < Math.floor(word.length/2); i++) {
      if (word.length % 2 == 0) {
        if(word.charAt(i) != word.charAt(word.length-1-i)){
          isPal = false;
          return isPal;
        }
      }
      else {
        if(word.charAt(i) != word.charAt(word.length-1-i)){
          isPal = false;
          return isPal;
        }
      }
    }
    return isPal;
  }
  console.log(pal('palindrome'));