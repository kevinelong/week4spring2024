let d = new Date();
console.log(d.toString());
// OUTPUT
// Wed May 01 2024 08:28:46 GMT-0700 (Pacific Daylight Time)

d = new Date();
console.log(d.toUTCString());
// OUTPUT
// Wed, 01 May 2024 15:28:46 GMT

d = new Date();
console.log(d.toDateString());
// OUTPUT
// Wed May 01 2024

// 2-22

d = new Date();
console.log(d.toLocaleDateString()); // 5/1/2024
console.log(d.toLocaleTimeString()); // 8:30:47 AM
console.log(d.toLocaleString());     // 5/1/2024, 8:30:47 AM
