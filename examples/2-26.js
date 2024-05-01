// When I create the date this way, it thinks I'm in GMT
// and it uses a 1-based month
let d = new Date("2023-05-11");
// But when I print it out, the display adjusts for my
// local time
console.log(d.toString());
// displays something like
// Wed May 10 2023 17:00:00 GMT-0700 (Pacific Daylight Time)


// When I create the date this way, it uses my local time zone
// AND it also uses a 0-based month
d = new Date(2023, 5, 11);
console.log(d.toString());
// displays something like
// Sun Jun 11 2023 00:00:00 GMT-0700 (Pacific Daylight Time)