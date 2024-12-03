/******************* ARRAY ********************* */

// const array = [1, 2, 3, 4, 5];
/* console.log(array); // [1, 2, 3, 4, 5]
console.log(array[0]); // 1
console.log(array.length); // 5

let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(arr2[0]); // 1
console.log(arr2.length); // 5 */

 // Array Methods
/* // Push and Pop
let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [1, 2, 3, 4, 5] 

myArray.push(6);
console.log(myArray); // [1, 2, 3, 4, 5, 6]

myArray.pop();
console.log(myArray); */

/* // Shift and Unshift
let array1 = [1, 2, 3, 4, 5];
console.log(array1); // [1, 2, 3, 4, 5]
array1.unshift(9);
console.log(array1); // [9, 1, 2, 3, 4, 5]

array1.shift();
console.log(array1); // [1, 2, 3, 4, 5] */

/* // Includes and IndexOf
let array3 = [1, 2, 3, 4, 5];
console.log(array3.includes(9)); // false
console.log(array3.indexOf(19)); // -1 //value not exists
console.log(array3.indexOf(3)); // 2 // 3 is in index 2 */

/* // JOIN
const newArr = array.join();
console.log(newArr); // 1,2,3,4,5 */

/* // Slice and Splice

console.log("A", array); // A [ 1, 2, 3, 4, 5 ]
const newArr1 = array.slice(1,3);
console.log(newArr1); // [ 2, 3 ]
console.log("B", array); // B [ 1, 2, 3, 4, 5 ]

const newArr2 = array.splice(1, 3);
console.log("C", array); // C [ 1, 5 ]
console.log(newArr2); // [ 2, 3, 4 ]

// Difference between slice and splice is that slice returns a new array while splice mutates the original array */

/******************** Arrays Pt.2 **************************/

const marvel_heroes = ["Thor", "Iron Man", "Captain America"];
const dc_heroes = ["Superman", "Batman", "Flash"];

/* //PUSH
marvel_heroes.push(dc_heroes); 
console.log(marvel_heroes);
// OUTPUT -> takes arrays as an element (here 3rd element is array itself)
/* [
  'Thor',
  'Iron Man',
  'Captain America',
  [ 'Superman', 'Batman', 'Flash' ]
] */ // */
 
/* //CONCAT
let allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);
//OUTPUT
/* [
  'Thor',
  'Iron Man',
  'Captain America',
  'Superman',
  'Batman',
  'Flash'
] */ //  */

/* // SPREAD OPERATOR
// Preferred more than concat
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);
// OUTPUT
/* [
  'Thor',
  'Iron Man',
  'Captain America',
  'Superman',
  'Batman',
  'Flash'
] */ // */
 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] 

const real_another_array = another_array.flat(Infinity); // infinity depth (depth of array within a array like we have 3)

console.log(real_another_array);
// OUTPUT
/* [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */


 console.log(Array.isArray("Manish")); // false);
 console.log(Array.isArray([1,2,3])); // true);
 console.log(Array.from("Manish")); // ['M', 'a', 'n', 'i', 's', 'h']
 console.log(Array.from({name:"Manish"})); // [] // returns empty array {INTERESTING}
 
 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
 
  



