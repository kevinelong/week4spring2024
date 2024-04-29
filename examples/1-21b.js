let number = 5;
function test() {
    let number = 6;
    console.log("++ " + number);
}
console.log("** " + number);
test();
console.log("** " + number);
// OUTPUT
// ** 5
// ++ 6
// ** 5