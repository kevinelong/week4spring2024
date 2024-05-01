// When date and time are specified, results are obvious
let d1 = new Date("May 20, 1990 03:20:00");
// May 20, 1990
// When only a date is specified, time defaults to midnight
let d2 = new Date("08/05/1986");
// August 5, 1986
let d3 = new Date("Sep 05 1958");
// September 5, 1958
let d4 = new Date("12 December 1982");
// December 12, 1992

let d5 = new Date("2004-06-25");
// June 24, 2004 <--------------- issue!

console.log(d1)
console.log(d2)
console.log(d3)
console.log(d4)
console.log(d5)