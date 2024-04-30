//Parsing - cutting up into parts.
let name = "Brenda Kaye";

// use String's built in .indexOf(c) and .slice(b,e) methods,
// and .length property

// DESIRED OUTPUT
// Name: Brenda Kaye
// First name: Brenda
// Last name: Kaye 

function parseAndDisplayName(name) {
    // p = haystack.indexOf(needle)
    let spacePosition = name.indexOf(" ") // space is the delimiter of words in a sentence
    let first = name.slice(0, spacePosition)
    let last = name.slice(spacePosition+1, name.length)

    console.log(`Name: ${name}`);
    console.log(`First name: ${first}`);
    console.log(`Last name: ${last}`);
    console.log("");
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");