function getNumGrandKids(name) { // name is the parameter
    let num = 0;

    if (name == "Dana") {
        num = 6;
    }else if (name == "Karla") { // changed "else (if" to "else if ("
        num = 3;
    }else if (name == "Leslye") {
        num = 2;
    }

    return num;
}

let num = getNumGrandKids("Dana"); // "Dana" is argument
console.log(num);

let num2 = getNumGrandKids("Karla");
console.log(num2);

console.log( getNumGrandKids("Kevin") ); //look mom no variable


