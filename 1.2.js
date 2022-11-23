// Write a JavaScript function that reverse a number


function reverse(num) {
    let str = String(num)
    let newStr = "";
      for (let i = str.length - 1; i >= 0; i--) {
          newStr += str[i];
      }
      let newNum = Number(newStr)
      console.log(newNum);
}

reverse(45678859)