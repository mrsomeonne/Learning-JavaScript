/*
What Is A Variable?
1. A variable is like a storage box where you can keep a piece of information to use late.
2. You can think of it as a label that you stick on something you want to remember.
*/

let count;
let counter = 5;
count = 0;
console.log(count);
counter = 50;
console.log(count + counter);

/*
Rules for making a variable
-> Must begin with a letter, underscore (_), or     dollar sign($).
-> Cannot start with a number.
-> Are Case-Sensitive.
-> Cannot use a reserved keyword
-> No spaces allowed;
-> Use descriptive names.
*/

let hello = "Hello"
let $price = 10;
let _name = "hi";
let user1 = 100;

let name = "Alice";
let Name = "Tom";
// Case Sensitive (Name and name are two different variable)
// let let = 10;<- Reserved Keyword (let)

// let first name = 10; <- Space not allowed
// should make a use of camelCase;

let a = 23;
// not descriptive -> let age = 23; <- better way

//can have multiple variable in a single line;

let a1 = 5, a2 = 10;

// let a1 =15; // Within a Scope variable name should be unique

// can declare multiple variable value in single line if the value is same 
let x, y, z;
x = y = z = 10;
console.log(z);
/*
In JavaScript you can create variable using the let, const, and var keywords.
let : Use this when you might want to change the value later.
const : Use this when you want to define a constant value.
var : Older way of creating a variable. Now we usually use let or const. 
*/

const con = 100;
console.log(con);
//con = 100;
//console.log(con); // index.js:54  Uncaught TypeError: Assignment to constant variable.
//at index.js:54:5

/*
  Datatypes: Defines the type of a variable

  Primitive Types:
  -> Number : Represents both integers and floating  point numbers
  -> String : Represents sequence of characters
  -> Boolean : Represents true or false value
  -> Null : Represents a null value (Absence of a value)
  -> Undefined : Represents an undefined value (Value not assigned)

  Reference Types:
  -> Array : Represents an array of values
  -> Object : Represents a collection of key-value pairs
*/
// Object: 
let userName = "Alice";
let userAge = 20;
// making object
let user = {
    name: "Alice",
    age: 20
}
console.log(user.name); // this is called dot notation
console.log(user.age);
console.log(user) //{name: 'Alice', age: 20} <- output

// Array:
let fruit1 = 'Apple';
let fruit2 = 'Banana';
// making array
let fruit = ['Apple', 'Banana', 'Mango'];

console.log(fruit);
console.log(typeof fruit);

/*
  STATICALLY AND DYNAMICALLY TYPED :

  Statically Typed Language
  -> The type of variable is known at compile time.
  -> The type of variable cannot be changed at runtime
  -> example : Java 
              int age = 20 

  Dynamically Typed Language
  -> The type of variable is known at runtime.
  -> The type of variable can be changed at runtime
  -> example : JavaScript
            
*/
// Dynamically

let myVar;
console.log(typeof myVar); // undefined
myVar = 10;
console.log(typeof myVar); // number
myVar = "Hello";
console.log(typeof myVar); // string

/*
  Expressions:
  -> An expression is a combination of operators and operands that can be evaluated to produce a value.
  -> in JavaScript any valid unit of code that produces a value.
  -> 3 + 3 <- Expression

  Literal:
  -> A literal is a (fixed) value that is directly written in the code.
  -> example : 10, "Hello", true

  Operator:
  -> An operator is a symbol that performs a specific operation on one or more operands.
  -> example : +, -, *, /
*/
/*
  Operators Types:
  1. Arithmetic Operators
  -> +, -, *, /, %

  2. Assignment Operators
  -> =, +=, -=, *=, /=

  3. Comparison Operators
  -> ==, ===, !=, !==, <, >, <=, >=

  4. Logical Operators
  -> &&, ||, !

  5.Unary Operators
  -> ++, --, !, typeof

  6. Ternary Operators
  -> condition ? expression1 : expression2
 */

/*

// Arithmetic Operators
let num1 = 10;
let num2 = 20;
console.log(num1 + num2); // 30
console.log(num1 - num2); // -10
console.log(num1 * num2); // 200
console.log(num1 / num2); // 0.5
console.log(num1 % num2); // 10


// Assignment Operators
a = 10;
a += 5; // a = a + 5
console.log(a); // 15
a -= 5; // a = a - 5
console.log(a); // 10
a *= 5; // a = a * 5
console.log(a); // 50
a /= 5; // a = a / 5
console.log(a); // 10
a %= 5; // a = a % 5
console.log(a); // 0

// Comparison Operators
console.log(num1 == num2); // false
console.log(num1 === num2); // false
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(num1 < num2); // true
console.log(num1 > num2); // false
console.log(num1 <= num2); // true
console.log(num1 >= num2); // false

// Logical Operators
console.log(num1 && num2); // false
console.log(num1 || num2); // true
console.log(!num1); // false

// Unary Operators
console.log(++num1); // 11
console.log(--num1); // 10
console.log(typeof num1); // number
console.log(typeof num2); // number

// Ternary Operators
let age = 18;
let canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote);
*/


/*
Arrays in JavaScript
    -> Arrays are used to store multiple values in a single variable.
    Creating Array:
    -> you can create an array using square brackets [].
    -> Arrays datatypes can also be mixed (different data types)
 */
let numbers = [1, 2, 3, 4];
console.log(numbers);

let fruits = ['apple', 'banana', 'mango'];
console.log(fruits);

let mixed = ['apple', 2, true];
console.log(mixed);

console.log(numbers[3]); // getting the value of the given index.

// multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
console.log(matrix[0]);
console.log(matrix[1][2]);
// You can get a length of Array using 
console.log(matrix.length);
console.log(numbers.length);

/*
    Arrays Methods:
    -> push() : adds an element to the end of the array
    -> pop() : removes the last element from the array
    -> shift() : removes the first element from the array
    -> unshift() : adds an element to the beginning of the array
    -> splice() : adds or removes elements from the array
    -> slice() : returns a new array containing a portion of the original array
    
 */
/*
ARRAY METHODS:

// PUSH
console.log(fruits.length);
fruits.push("cherry");
console.log(fruits);
console.log(fruits.length);

// POP
console.log(fruits.length);
fruits.pop();
console.log(fruits);
console.log(fruits.length);

// SHIFT
console.log(fruits.length);
fruits.shift();
console.log(fruits);
console.log(fruits.length);

// UNSHIFT
console.log(fruits.length);
fruits.unshift("apple");
console.log(fruits);
console.log(fruits.length);

// SPLICE
console.log(fruits.length);
fruits.splice(1, 2);
console.log(fruits);
console.log(fruits.length);

// SLICE
console.log(fruits.length);
let newFruits = fruits.slice(1, 3);
let newFruits = fruits.slice(1, 2 , "newBanana");
console.log(newFruits);
console.log(fruits.length);
*/

/* OBJECTS IN JAVASCRIPT:
    -> Objects allow you to group related data and functions together.
    
    An object is created using curly braces `{}` and contains key-value pairs, where each key (also called a
     property) is associated with a value.

 */
//OBJECT :
// Deceleration
let person = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: true
}
// Accessing Properties:
// can be accessed using dot notation
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.isStudent);
console.log(person["name"]);

// Adding or Updating Properties
person.age = 66;
console.log(person.age);
console.log(person);

person.job = "Programmer";
console.log(person);
console.log(person.job);

// Deleting Properties
delete person.isStudent;
console.log(person);

// Check if property exists
console.log('job' in person); // true
console.log('isStudent' in person); // false
console.log(person.hasOwnProperty("age")); // true

// Nested Objects
let student = {
    studentName: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    courses: {
        math: true,
        computer: true,
        english: false,
        science: false
    }
}
// Here nesting address and courses inside student
console.log(student.address.street);
console.log(student.address.city);
console.log(student.address.state);
console.log(student.courses.math); // true
console.log(student.courses.science); // false

//Object Destructuring
let {studentName, courses} = student
console.log(studentName); // John
console.log(courses.math); // true

let {studentName2, courses2} = student
console.log(studentName2); // undefined
console.log(courses.math2); // undefined

/*
    Type Conversion:
    -> Type conversion is the process of converting one data type to another data type.
    -> JavaScript automatically converts data types based on the context in which they are used.
    -> JavaScript is a loosely typed language
    -> JavaScript supports implicit and explicit conversion
        => Implicit : The automatic conversion of one data type to another data type.
        => Explicit : The manual conversion of one data type to another data type.
 */
// IMPLICIT CONVERSION
let example1 = 5 + 1;
console.log(example1); // 6
console.log(typeof example1); // number
example1 = '5' + 1; // '5' + '1'
console.log(example1); // 51
console.log(typeof example1); // string

let example2 = 5 - 1;
console.log(example2); // 4
console.log(typeof example2); // number
example2 = '5' - 1; // '5' - 1
console.log(example2); // 4
console.log(typeof example2); // number

let example3 = '5' * 10;
console.log(example3); // 50
console.log(typeof example3); // number

let example4 = true + 1;
console.log(example4); // 2
console.log(typeof example4); // number
// bool true = 1
/*
 -> When you try to add a string and a number, JavaScript will automatically convert the number to a string.
 -> When you try to subtract a string and a number, JavaScript will automatically convert the string to a number.
 -> No function for subtract (-) for string like addition (+) has to concatenate the strings.
*/
//EXPLICIT CONVERSION

// toString(), String()
let num = 123;
let bool = true;

let numToString = String(num);
console.log(numToString, typeof numToString) // 123 string

let boolToString = String(bool);
console.log(boolToString, typeof boolToString); // true string

let numToString1 = num.toString();
console.log(numToString1, typeof numToString1) // 123 string

let boolToString1 = bool.toString();
console.log(boolToString1, typeof boolToString1); // true string

// Number(), parseInt(), parseFloat()
let strNum = "456";
let strFloat = "12.55";

let strToNum = Number(strNum);
console.log(strToNum, typeof strToNum); // 456 'number'

let strToFloat = parseFloat(strFloat);
console.log(strToFloat, typeof strToFloat); // 12.55 'number'

let strToInt = parseInt(strNum);
console.log(strToInt, typeof strToInt); // 456 'number'

let strToInt1 = parseInt(strFloat);
console.log(strToInt1, typeof strToInt1); // 12 'number'

//Invalid number

let inValidNum = Number("hello");
console.log(inValidNum, typeof inValidNum); // NaN 'number'

// Boolean()
let zero = 0;
let one = 1;
let minus = -1;
let nonEmptyString = "Hello";

let zeroToBoolean = Boolean(zero);
console.log(zeroToBoolean, typeof zeroToBoolean); // false 'boolean'

let oneToBoolean = Boolean(one);
console.log(oneToBoolean, typeof oneToBoolean); // true 'boolean'

let minusToBoolean = Boolean(minus);
console.log(minusToBoolean, typeof minusToBoolean); // true 'boolean'

let nonEmptyStringToBoolean = Boolean("Hello");
console.log(nonEmptyStringToBoolean, typeof nonEmptyStringToBoolean); // true 'boolean'

// Everything except 0 or null or Empty String will be converted to bool(true)