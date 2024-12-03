/******************************NUMBERS********************************** */

/* const score = 400;
console.log(score); // 400
console.log(typeof(score)); // number


const balance = new Number(100);
console.log(balance); // [Number: 100]
console.log(typeof(balance)); // object

console.log(balance.toString()); // 100
let tempBal = balance.toString;
console.log(typeof(balance)) // object
console.log(typeof(balance.toString)); // function
console.log(balance.toString().length); // 3


console.log(balance.toFixed(2)); // 100.00

let otherNumber = 23.564866
console.log(otherNumber.toPrecision(3)); // 23.6
console.log(typeof(otherNumber)); // number
otherNumber = 1123.545214;
console.log(otherNumber.toPrecision(3)); // 112e+3

// Hundreds (toLocaleString)
const hundreds = 100000;
console.log(hundreds.toLocaleString()); // 100,000   // American Standard
console.log(hundreds.toLocaleString('en-IN')); // 1,00,000  // Indian Standard

//Min and Max 
const min = Number.MIN_VALUE;
console.log(min); // 5e-324
const max = Number.MAX_VALUE;
console.log(max); // 1.7976931348623157e+308 */

/****************************************** MATHS *********************** */

console.log(Math); // Object [Math] {(Various Properties)}

console.log(Math.abs(-5)); // 5  // Provides absolute value ie, - to +
console.log(Math.round(2.5)); // 3
console.log(Math.ceil(2.1)); // 3
console.log(Math.floor(2.9)); // 2
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// RANDOM
console.log(Math.random()); // Random value between 0 and 1 
console.log((Math.random() * 10) + 1); // To avoid 0, Random value between 1 and 10
console.log(Math.floor(Math.random() * 100)); // Random value between 0 and 99

const min = 10;
const max = 20;

console.log((Math.random() * (max - min + 1) ));
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // to get a random value between min and max (Formula)
 








