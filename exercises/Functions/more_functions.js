// Functionsmore_functions.js 
function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city + ",",state,zip)
    // console.log(city + ", " + state + " " + zip)
    // console.log(`${city}, ${state} ${zip}`); //tempplate string backtic
}
displayMailingLabel("Kevin", "1750 6th", "Columbia City", "OR", "97018")

function addNumbers(num1, num2){
    console.log(num1, "+", num2, "=", num1 + num2)
}
addNumbers(6,7)

// someNumber + someNumber = someNumber 
function displayReceipt(totalDue, amountPaid){

    // Total Due: $someNumber
    console.log("Total Due:", totalDue)
    
    // Amount Paid: $someNumber
    console.log("Amount Paid:", amountPaid)

    console.log("")//blank line

    // Change Due: $someNumber
    console.log("Change Due:", amountPaid - totalDue);
}

displayReceipt(12, 20); // should show 8 for change
displayReceipt(12, 10); // should show 8 for change
displayReceipt(12, 12); // should show 8 for change
