let namesTextString = "San Francisco,Dallas,Atlanta,Hartford";
const delimiter = ",";
let cityArrayList = namesTextString.split(delimiter);

for (let index = 0; index < cityArrayList.length; index++) {
    let city = cityArrayList[index];
    console.log(`position ${index} - value "${city}"`); //REPEATS
}
console.log("THE END");