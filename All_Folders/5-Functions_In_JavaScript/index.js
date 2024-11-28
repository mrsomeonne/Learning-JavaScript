/*
  What is a Function?
  -> A function id a block of code designed to perform a specific task or action.
  -> It can be used multiple times
*/

/*function greetSomeone() {
    // greet : Name Of Function.
    //Function Body: The block of code that executes when the function is called.

    console.log("Hello, SOMEONE!!")
    console.log("Logged In!!!")
    // If the body is changed then it is changed everywhere it is called or used!
}

// console.log("hello!")
// console.log("hello!") 
// console.log("hello!") 
// console.log("hello!") 
// console.log("hello!") 
// console.log("hello!") 

greetSomeone(); // calling a function
greetSomeone();
greetSomeone();*/

/*function greet(name) {

    console.log(`hello, ${name}!!`);
    console.log("You are now Logged In!!")
// ` ` -> Template literal
}

greet(); // Hello undefined !! <- not passed the name so undefined.
greet("Manish"); // Hello Manish !!
greet("Niroj"); // Hello Niroj !!*/

/*
 Parameter and Argument
 greet(name) -> Parameter
 "Manish" -> Argument
 *!/

function person(name, age) {
    console.log(`Hello, ${name}!`);
    console.log(`You are ${age} years old!`, typeof age);
    console.log("Welcome!")
}

person("Manish", 21);
person("Niroj", 21);// 21 -> number
person("John", "25") // 25 -> string
person("Hello", "hello")
// -> Hello, hello
// -> you are hello years old! string
// -> Welcome


//Function with DEFAULT Parameter
function greetPerson(name = "Guest") {
    console.log(`Hello, ${name}`);
}

greetPerson(); // Hello, undefined -> To resolve the undefined you can predefine the name from the parameter (can
// also add argument in the function call) / default parameter value
// Now output => Hello, Guest
greetPerson("Manish") // Hello, Manish

// Function with REST PARAMETER
//function calculateSum(a,b){
function calculateSum(...numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += number;
    }
    console.log(sum);
}

//calculateSum(2,2); // 4

calculateSum(10, 20, 30) // 60
calculateSum(10, 80, 10, 30, 20, 50) // 200

// BOOLEAN PARAMETERS
function checkEligibility(isMember) {
    console.log((isMember) ? "Eligible" : "Not Eligible");
}

checkEligibility(true); // Eligible
checkEligibility(false); // Not Eligible

//FUNCTIONS with OBJECTS as Parameters
function printAddress({street, city, zip}) {
    console.log(`Address: ${street}, ${city}, ${zip}`);
}

// TO Call This Function
let address = {
    street: "Kathmandu",
    city: "New Road",
    zip: 252525
}
// Passing Object As Argument
printAddress(address); // Address: Kathmandu, New Road, 252525
printAddress({street: "Street1"}) // Address: Street1, undefined, undefined

// FUNCTIONS with ARRAY as Parameters
function printNumbers(numbers){
    console.log(numbers);
}
//Passing Array as an Argument
printNumbers([1,2,3,4,5]) // [ 1, 2, 3, 4, 5 ]

*/

/*function getSquare(number) {
    return number * number;
}

let squareNum = getSquare(4)
console.log(squareNum); // 16*/

/*//FUNCTION RETURNING MULTIPLE VALUES.
function getUserInfo(name, age) {
    return {
        userName: name,
        userAge: age
    }
}

getUserInfo("Manish", 21);

let userInfo = getUserInfo("Manish", 21);
console.log(userInfo); // { userName: 'Manish', userAge: 21 }

//DESTRUCTURING / UNPACKING THE OBJECT
let {userName, userAge} = getUserInfo("Manish", 21);
console.log(userName, userAge); // Manish 21 */

/*// FUNCTION RETURN ARRAY
function getDimension() {
    return [200, 300, 500];
}

console.log(getDimension()); // [ 200, 300, 500 ]

// DESTRUCTURING ARRAY
let [width, height, depth] = getDimension();
console.log(width, height, depth); // 200 300 500*/

/*
// FUNCTION WITH NO RETURN
function sayHello() {
    console.log("Hello!")
}

sayHello(); // Hello!

let msg = sayHello();
console.log(msg); // undefined -> Because Function has no return*/

/*// FUNCTION WITH MULTIPLE RETURN STATEMENTS
function checkAge(age){
    if (age > 18){
        return "Adult";
    }else {
        return "Minor";
    }
    // RETURN value will execute only one depending on the condition 
}

console.log(checkAge(20)); // Adult
console.log(checkAge(14)); // Minor*/

/*
//FUNCTIONS EXPRESSIONS:
sayHello(); // Hello! <- Still works even if function is not defined above this line but below.
function sayHello() {
    console.log("Hello!");
}

// greet(); // cannot call greet before definition
let greet = function () {
    console.log("Hello!!");
}
greet(); // Hello!!
console.log(greet); // ƒ (){ console.log("Hello!!");  }

let multiply = function (a, b) {
    return a * b;
}
multiply(10, 2); // no console.log so no output
console.log(multiply(10, 20)); // 200

// Function in JavaScript are Objects.

function sayHi() {
    console.log("Hi, Again!");
}

sayHi(); // Hi, Again!
let a = sayHi;
a(); // Hi, Again
console.log(a); // ƒ sayHi(){ console.log("Hi, Again!");  }*/

/*
//ARROW FUNCTION
// -> Arrow Functions provide a more concise way of writing a functions

function sayHello() {
    console.log("Hello!");
}

sayHello(); // BASIC FUNCTION (Hello!)

let greet = function () {
    console.log("Hello!");
}
greet(); // BASIC FUNCTION (Hello!)

// Arrow Function 
let sayHi = () => console.log("Hi!!"); // You can also create a function this way (in a single line or oneline)
sayHi(); // Hi!!

let greetMultiple = () => {
    console.log("Hello1!");
    console.log("Hello2!");
}
greetMultiple() // Hello1! Hello2!

//Arrow function with parameters
let greetParam = (name) => {
    console.log(`Hello, ${name}!!`);
}
greetParam("Manish") // Hello, Manish!

let greetParam2 = (name, age) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}
greetParam2("Manish", 21) // Name: Manish Age: 21

let greet1 = (name) => console.log("Hello,", name);
greet1("Manish"); // Hello, Manish

// Arrow Function with Return statement / Values
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20)); // 30

let addition = (a, b) => {
    return a + b;
}
console.log(addition(10, 20)); // 30

// don't even need return and can be done in oneline for single statement
let sub = (a, b) => a - b;
console.log(sub(20, 10)); // 10*/

/*
// MAKING USE OF FUNCTION INSIDE OBJECT
let person = {
    name: "Alice",
    age: 33
};
console.log(person.age) // 33
console.log(`Hi I am ${person.name}`); // Hi I am Alice

// You can have functions inside objects <- If you are adding Function Inside Objects, They are known as Methods.

let std = {
    stdName: "Manish",
    stdAge: 21,
    // greet: function (){
    //     console.log(`Hi I am ${std.stdName}`);
    //     console.log(`I am ${std.stdAge} years old!`)
    // }
    // Using Arrow Function
    greet: () => {
        console.log(`Hi I am ${std.stdName}`);
        console.log(`I am ${std.stdAge} years old!`);
    }

};

console.log(std.greet); // ƒ greet(){ console.log(`Hi I am ${std.stdName}`); console.log(`I am ${std.stdAge} years old!`) }
std.greet(); // Hi I am Manish I am 21 years old!

// This Keyword
// this. .... keyword will NOT WORK on arrow function
let student = {
    stdName: "Manish",
    stdAge: 21,
    greet: function () {
        console.log(`Hi I am ${this.stdName}`);
        console.log(`I am ${this.stdAge} years old!`);
    }
};
std.greet(); // Hi I am Manish I am 21 years old!

// COUNTER
let counter = {
    value: 0,
    increment: function () {
        this.value += 1;
        return this.value;
    }
};
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.increment()); // 4

let counter1 = {
    value: 0,
    increment: function () {
        this.value += 1;
        return this.value;
    },
    incrementBy: function (num) {
        this.value += num;
        return this.value;
    }
};
console.log(counter1.incrementBy(10)); //10
console.log(counter1.incrementBy(10)); //20
console.log(counter1.incrementBy(20)); //40

// Defining Methods Dynamically
let dynamicMethod = {
    value: 0
};
console.log(dynamicMethod.value); // 0

dynamicMethod.sayHi = function () {
    console.log("Hello Dynamic!!")
}
dynamicMethod.sayHi(); // Hello Dynamic!!
// Methods can be added to a program at any time not just the time if creation (DYNAMIC)

//Nested Objects
let car = {
    brand: "Toyata",
    specs: {
        speed: 180,
        displaySpecs: function (){
            console.log(`Max speed is :`, this.speed);
        }
    }
};
car.specs.displaySpecs(); // Max speed is : 180

// Shorthand Version
let personShorthand = {
    name: "ShortHand",
    age: 100,
    greet(){
        console.log(`Hi I am ${this.name}`);
        console.log(`I am ${this.age} years old!`);
    }
};
personShorthand.greet(); // Hi I am ShortHand I am 100 years old!*/

// ARRAYS METHODS:
// -> `map()`: Transforms each element and returns a new array containing the transformed elements.
// -> `filter()`: Returns a new array containing elements that pass the test implemented by the provided function.
// -> `reduce()`: Accumulates the elements of an array to a single value using a reducer function.
// -> `forEach()`: Executes a provided function once for each element in an array.
// -> `find()`: Returns the first element in an array that passes the test implemented by the provided function.
// -> `some()`: Checks if at least one element in an array passes the test implemented by the provided function.
// -> `every()`: Checks if all elements in an array pass the test implemented by the provided function.
// -> `concat()`: Returns a new array containing the elements of the first array followed by the elements of the second array.
// -> `slice()`: Returns a new array containing a portion of the original array.
// -> `join()`: Returns a string containing the elements of the array separated by a specified separator.
// -> `reverse()`: Reverses the order of the elements in an array.
// -> `sort()`: Sorts the elements of an array in place and returns the array itself.

/*// map() : Transforms each element and returns a new array containing the transformed elements.
function double(num) {
    console.log(num);
    return num * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Using Anonymous Function
// Instead of passing the function we are creating the function in the same line
let doubledAnonymous = numbers.map(function (num) {
    return num * 2;
});
console.log(doubledAnonymous); // [2, 4, 6, 8, 10]

let doubleArrow = numbers.map((num) => {
    return num * 2
});
console.log(doubleArrow); // [2, 4, 6, 8, 10]

// Without curly braces and return statement;
let doubleCurly = numbers.map(num => num * 2);
console.log(doubleCurly); // [2, 4, 6, 8, 10]

// When you need function to be reused again and again then you need to create a separate function.
// When you need function just for an array transformation then you can use anonymous function.*/

/*
// filter() : Returns a new array with elements that pass a condition

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = numbers1.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6, 8]*/

/*// reduce(): Reduces the array to a single value

let numbers2 = [1, 2, 3, 4, 5];
let sum = numbers2.reduce((total, num) => {
    return total + num;
});
console.log(sum); // 15

let sum1 = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum1) // 15*/

/*// for each(): Executes a function for each array element
let numbers=[1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num)); // 1 2 3 4 5*/

/*// find() : Returns the first element that satisfies a condition
let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven) // 2*/

/*
// some(): Checks if AT LEAST ONE element passes a particular test
let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven) // true
let hasNeg = numbers.some(num => num < 0 );
console.log(hasNeg) // false*/

/*// every() : Check if ALL THE ELEMENTS passes a test
let numbers = [1, 2, 3, 4, 5];
let hasEvery = numbers.every(num => num % 2 === 0);
console.log(hasEvery); // false
let allPositive = numbers.every(num => num > -0);
console.log(allPositive); // true*/

/*// concat() : Merges arrays into a new array
let numbers = [1, 2, 3, 4, 5];
let moreNumbers = [6, 7, 8, 9, 10];
let concatNum = numbers.concat(moreNumbers);
console.log(concatNum); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/

/*// slice() :return a portion of an array
let numbers = [1, 2, 3, 4, 5];
let moreNumbers = [6, 7, 8, 9, 10];
let concatNum = numbers.concat(moreNumbers);
console.log(concatNum);
let slicedNum = concatNum.slice(2, 5);
console.log(slicedNum); // [3, 4, 5]*/

/*
// splice() : Modifies the array by removing/replacing elements
let fruits = ["apple", "banana", "orange",];
console.log(fruits); // ["apple", "banana", "orange"]
fruits.splice(1, 1, "mango");
console.log(fruits); // ["apple", "mango", "orange"]
*/

/*// join() : Joins all elements into a string
let fruits = ["apple", "banana", "orange"];
console.log(fruits); // ["apple", "banana", "orange"]
let allFruits = fruits.join(", ");
console.log(allFruits); // "apple, banana, orange"*/

/*// reverse() : Reverses the order of elements
let numbers = [1, 2, 3, 4, 5];
let reverseNum = numbers.reverse();
console.log(reverseNum); // [5, 4, 3, 2, 1]*/

/*// sort() : Sort the elements of the array
let numbers = [1,8,9,2,4,5,6];
let sortedNum = numbers.sort();
console.log(sortedNum); // [1, 2, 4, 5, 6, 8, 9]

let sorNum = numbers.sort((a,b)=> a - b);
console.log(sorNum); // [1, 2, 4, 5, 6, 8, 9]*/


