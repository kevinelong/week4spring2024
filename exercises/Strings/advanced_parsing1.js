function parseAndDisplayName(name){

    console.log("Name: " + name);

    firstSpacePosition = name.indexOf(" ");
    if(firstSpacePosition == -1){
        //not found
        console.log("Only name: " + name);
        console.log("");//blank line
        return; //exit funtion now
    }

    first = name.slice(0, firstSpacePosition);
    right = name.slice(firstSpacePosition+1, name.length);

    rightSpace = right.indexOf(" ");
    if(rightSpace == -1){
        console.log("First name: " + first);
        console.log("Last name: " + right);
        console.log("");//blank line
        return; //exit funtion now    
    }

    middle = right.slice(0, rightSpace);
    last = right.slice(rightSpace+1, rightSpace.length);

    console.log("First name: " + first);
    console.log("Middle name: " + middle);
    console.log("Last name: " + last);
    console.log("");//blank line
}
parseAndDisplayName("billy joe bob");


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
