
let count = 0;
function increment() {
    count = count + 1;
}

function showName() {
    let name = "Brittany";
    console.log(name);
}
// cannot access the variable name here
console.log(name) //Uncaught ReferenceError ReferenceError: name is not defined