// Write a JavaScript function to returns the properties of a JavaScript object.
const student = {
    id : 25,
    name : "David Rayy",
    class : 12,
};

function getProperties() {
    console.log(Object.keys(student))
}

getProperties(student)  // ["id", "name", "class"]