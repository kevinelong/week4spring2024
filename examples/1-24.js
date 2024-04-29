name = "Ezra";
var name; // weird, huh?
console.log(name); //show hoisted name
// 
// 
var num1 = 5;
var answer = num1 + num2; //num2 not hoisted
console.log(answer); // displays NaN
var num2 = 7; // because num2 is initialized here