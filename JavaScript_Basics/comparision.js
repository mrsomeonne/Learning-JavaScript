/* console.log(2>1); // true
console.log(2>=1); // true
console.log(2<1); // false
console.log(2<=1); // false
console.log(2==1); // false
console.log(2!=1); // true */

//These are not applicable in typescript data types should be same
console.log("2" > 1); // true
console.log("02" > 1); // true
console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// Not predictable result due to type conversion

/* The reason is that an equality check == and comparisons > < >= <= work differently
Comparisons convert null to a number, treating it as a 0. 
So, (3) null >= 0 is true and (1) null > 0 = false */

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === 'Strict Check' <- also checks the data types not only the value
console.log('2' === 2); // false
