// can be represented by both "" and '' 

const name = "mrsomeonne";
const repoCount = 10;

console.log(name + repoCount +  "Till Now"); // mrsomeonne10Till Now
// not a proper way to write a syntax in a modern day

// Make a use of Backticks (` `)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Manish Khadka'); // another way to create/declare a string
console.log(gameName);

console.log(gameName[0]); // M
console.log(gameName.__proto__); // {} -> Objects
console.log(gameName.length); // 14
console.log(gameName.toUpperCase);// [Function: toUpperCase]
console.log(gameName.toUpperCase()); // MANISH KHADKA
console.log(gameName.charAt(8)); // h
console.log(gameName.indexOf('h')); // 5

// substring, slice and trim
const newString = gameName.substring(0, 4); // Mani
const anotherString = gameName.slice(-5); // hadka

console.log(newString, anotherString);

const newStringOne = "         Manish        ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trims white spaces

//Replace
const url = "https://someonne.com/manish%20khadka";
console.log(url); // https://someonne.com/manish%20khadka
console.log(url.replace('%20', '-')); // https://someonne.com/manish-khadka

console.log(url.includes('manish')); // true

let str = "manish-khadka-21";
console.log(str.split('-')); // [ 'manish', 'khadka', '21' ]



 

