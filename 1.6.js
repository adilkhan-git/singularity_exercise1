// Write a JavaScript function which will take an array of numbers stored
// and find the second lowest and second greatest numbers, respectively.

function minAndMax2(array) {

    let min = Number.MAX_VALUE
    let max = Number.MIN_VALUE
    let min2 = Number.MAX_VALUE - 1
    let max2 = Number.MIN_VALUE -1
    
    let numbers = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min ) {
            min = array[i]
        } 
        
    }
    array = array.filter((n) => {return n != min});
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min2 ) {
            min2 = array[i]
        } 
        
    }
    numbers.push(min2)
    
    
    for (let j = 0;j < array.length; j++ ) {
        if (array[j] > max) {
            max = array[j]
        }
    }
    array = array.filter((n) => {return n != max});
    for (let j = 0;j < array.length; j++ ) {
        if (array[j] > max2) {
            max2 = array[j]
        }
    }
    numbers.push(max2)
    console.log(numbers)
}



minAndMax2([17, 5, 10, 2, 20, 12, 11, 16, 14, 9]); // [5, 17]
minAndMax2([6, 7, 16, 11, 12, 10, 9, 4, 1, 15]); // [4, 15]

