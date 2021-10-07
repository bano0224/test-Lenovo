//2)

function palindrome(string) {
    const stringReverse = string.split("").reverse().join("")
  
    return stringReverse === string ? true : false
  }