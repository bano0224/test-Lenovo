//2)

function palindrome(string) {
    const stringReverse = string.split("").reverse().join("")
  
    return stringReverse === string ? "es palindromo" : "no es palindromo"
  }