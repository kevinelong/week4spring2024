// let x = 123
// let t = "abc"
// let numbers = [1,2,3] // array/list
// let letters = ["a","b","c"] // array/list
function parseAndDisplayName(name){
    console.log("Name: " + name)
    let delimiterSpace = " ";

    let partsArrayList = name.split(delimiterSpace); 
    //converts a single string into an array with one or more strings inside

    //console.log(partsArrayList.length, partsArrayList);
    if(partsArrayList.length == 1){
        console.log("Only name: " + name)
    }else if (partsArrayList.length == 2){
        console.log("First name: " + partsArrayList[0])
        console.log("Last name: " + partsArrayList[1])
    }else{ //could use if 3?
        console.log("First name: " + partsArrayList[0])
        console.log("Middle name: " + partsArrayList[1])
        console.log("Last name: " + partsArrayList[2])
    }
}
parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");

parseAndDisplayName("Zendaya");
parseAndDisplayName("Taylor Swift");
parseAndDisplayName("Kevin Ernest Long");

// Name: Cher
// Only name: Cher

// Name: Brenda Kaye
// First name: Brenda
// Last name: Kaye

// Name: Dana Lynn Wyatt
// First name: Dana
// Middle name: Lynn
// Last name: Wyatt
