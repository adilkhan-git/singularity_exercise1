// Write a JavaScript function which will take an array of numbers stored
// and find the lowest and greatest numbers, respectively.


function minAndMax(array) {

    let min = Number.MAX_VALUE
    let max = Number.MIN_VALUE
    
    numbers = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min ) {
            min = array[i]
        } 
        
    }
    numbers.push(min)
    
    
    for (let j = 0;j < array.length; j++ ) {
        if (array[j] > max) {
            max = array[j]
        }
    }
    numbers.push(max)
    console.log(numbers)
}



minAndMax([17, 5, 10, 2, 20, 12, 11, 16, 14, 9]); // [2, 20]
minAndMax([6, 7, 16, 11, 12, 10, 9, 4, 1, 15]); // [1, 16]