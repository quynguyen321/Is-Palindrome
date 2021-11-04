// Write your code below
function isPalindrome(word) {
    let x = word.length - 1
    for (let i = 0; i < (word.length - 1) / 2; i++) {
      if (word[i] !== word[x]) {
        return false
      }
      x--
    }
    return true
  }
  console.log(isPalindrome(`a`))