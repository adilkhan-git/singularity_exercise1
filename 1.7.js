// Write a JavaScript function to extract unique characters from a string.


function uniqueChar(str) {
    let newArray = str.split("")
    
  
    let newSet = new Set()

    for (let i = 0; i < newArray.length; i++) {
        newSet.add(newArray[i])
    }

    let newStr = Array.from(newSet).join('');
    console.log(newStr);  
   
   

}





uniqueChar("thequickbrownfoxjumpsoverthelazydog"); // thequickbrownfxjmpsvlazydg

