//FAILS
function addNums(a, b, c) {
    if (a < 0) {
        let sum = Math.abs(a) + Math.abs(b) + Math.abs(c);
    }
    else {
        let sum = a + b + c;
    }
    console.log(sum); // Uncaught ReferenceError ReferenceError: sum is not defined
}
let x = addNums(-1, 3, 7)
