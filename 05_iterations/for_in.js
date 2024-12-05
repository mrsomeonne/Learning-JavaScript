/***************************************************FOR_IN LOOP****************************************************** */

/* //Syntax
for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}
 */

//OBJECT
const myObject = {
  js : 'JavaScript',
  react : 'React',
  node : 'Node',
  cpp: 'C++'
}

for (const key in myObject) {
  console.log(key);
  // output -> js react node cpp
}

for (const key in myObject) {
  console.log(myObject[key]);
  // output -> JavaScript React Node C++
}

for (const key in myObject) {
  console.log(`${key} for shortcut id for ${myObject[key]}`);
}

//ARRAYS

const programming = ["js", "react", "node", "cpp", "python", "java"];

for (const key in programming) {
  console.log(key);
  // output -> 0 1 2 3 4 5 (Prints the index/keys of array) 
}

for (const key in programming) {
  console.log(`${key} is id for ${programming[key]}`);
}

// Maps

const map = new Map();
map.set('NP', "Nepal");
map.set('IN', "India");
map.set('CN', "China");

for (const key in map) {
console.log(map);
  // not iterable so it will not print out anything
}
