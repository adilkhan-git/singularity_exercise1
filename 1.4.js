// Write a JavaScript function that accepts a string as a parameter
// and converts the first letter of each word of the string in upper case.


function uppercaseEachWord(str) {
    
    let words = str.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    let newStr = words.join(" ");
    
    console.log(newStr)

}



uppercaseEachWord("the quick brown fox"); // The Quick Brown Fox

