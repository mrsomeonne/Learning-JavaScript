/******************************************** FOR_OF Loop *********************************************/  

// ["","",""]
// [{}.{},{}]
/* //Syntax
for (const element of object) {
  
} */

const arr = [1,2,3,4,5];

for (const num of arr) {
  console.log(num);
  // output will be : 1 2 3 4 5 (one in each line)
}

const greetings = "Hello World!"

for (const greet of greetings) {
  console.log(greet);
  // Will print out each character of the string
}

// Maps
// Maps are the collection of key value pairs and is also an object

const map = new Map();
map.set('NP', "Nepal");
map.set('IN', "India");
map.set('CN', "China");
map.set('NP', "Nepal"); // Duplicate will not be added (only Unique)

console.log(map); // Map(3) {'NP' => 'Nepal', 'IN' => 'India', 'CN' => 'China'}

for (const key of map) {
  console.log(key);
}

for (const [key , value] of map) {
  console.log(key + ': ' + value);
  
}

const myObject = {
  name: "Manish",
  age: 21,
  email: "manishkhadka.com.np",
  location: "Kathmandu"
}

for (const [key , value] of myObject) {
  console.log(key + ': ' + value); // Error -> myObject is not iterable
  
}
// Maps are iterable






