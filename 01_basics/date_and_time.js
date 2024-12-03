/***************** DATES ****************** */

let myDate = new Date() // created an Object
console.log(myDate); // 2024-12-03T08:20:16.217Z
console.log(typeof myDate); // object


// Important Functions
console.log(myDate.toString()); // Tue Dec 03 2024 14:05:56 GMT+0545 (Nepal Time)
console.log(myDate.toDateString()); // Tue Dec 03 2024
console.log(myDate.toLocaleString()); // 12/3/2024, 2:05:56 PM
console.log(myDate.toISOString()); // 2024-12-03T08:20:16.217Z // after T08 value is random
console.log(myDate.toJSON()); // 2024-12-03T08:20:16.217Z // after T08 value is random

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString()); // Tue Jan 23 2023  //Months stars with 0 0 ->Jan

let testDate = new Date(2023,12,23)
console.log(testDate.toDateString()); // Tue Jan 23 2024  12 -> next year Jan

let dateFormat2 = new Date("2023-0-14");
console.log(dateFormat2.toDateString()); // Invalid date here, Months start form 1 to 12
let properDateFormat2 = new Date("2023-01-14");
console.log(properDateFormat2.toDateString()); // Sat Jan 14 2023

let myTimeStamp = Date.now
console.log(myTimeStamp()) // 1733214774981 // values in millisecond

console.log(myCreatedDate.getTime());

// converting to second
console.log(Math.floor(Date.now()/ 1000)); //1733214909 // values in seconds


let newDate = new Date

console.log(newDate); //2024-12-03T08:35:47.752Z

console.log(newDate.getDay());
console.log(newDate.getFullYear()); 
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

// `@{newDate.getDay()}` and the time


// Output
console.log(newDate.toLocaleString('default', {
  weekday: 'long',
  timeZone: 'Asia/Kathmandu',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}));

