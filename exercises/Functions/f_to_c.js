function convertFtoC(f) {
    let c =( f - 32) * (5/9) // search for formula
    return c
}

console.log(convertFtoC(212));
console.log(convertFtoC(90));
console.log(convertFtoC(72));
console.log(convertFtoC(32));
console.log(convertFtoC(0));
console.log(convertFtoC(-40));
