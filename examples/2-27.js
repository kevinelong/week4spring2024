// When I create the date this way, it uses my local time zone
let d = new Date("05-11-2021");
console.log(d.toString());
// displays something like
// Tue May 11 2021 00:00:00 GMT-0700 (Pacific Daylight Time)
// When I create the date this way, it uses my local time zone
d = new Date("05/11/2023");
console.log(d.toString());
// displays something like
// Thu May 11 2023 00:00:00 GMT-0700 (Pacific Daylight Time)

// this will come up using date value from an html input of type date
// <input type="date"> 2023-05-11