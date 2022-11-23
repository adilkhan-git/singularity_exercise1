// Write a JavaScript function that checks whether a passed string is palindrome or not?


function isPalindrome(str) {
    let neWStr = str.toLowerCase()
    const len = neWStr.length
    for (let i = 0; i < len /2; i++) {
        if (neWStr[i] !== neWStr[len - 1 - i]) {
            console.log("false")
            break
        } else {
            console.log("true")
            break
        }
    }
    

}
isPalindrome("loki"); // false
isPalindrome("aba"); // true
isPalindrome("abab"); // false
isPalindrome("Qazaq"); // true