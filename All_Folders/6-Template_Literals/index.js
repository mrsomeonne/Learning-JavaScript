/*
// TEMPLATE LITERALS
// -> Allows you to work with strings in a more flexible and readable way
    SYNTAX : `${expression}`
*/

/*let name = "Manish";
let place = "GZK"
console.log("Hello, " + name + " Welcome To " + place + "!"); // Hello, Manish Welcome To GZK!
//Using Template Literal ``(backticks)
console.log(`Hello, ${name} Welcome To ${place}!`); // Hello, Manish Welcome To GZK!

//Instead of using concat operator
console.log("Hello, " + name + " Welcome To " + place + "!");
// We are making use of backticks and Template Literal
console.log(`Hello, ${name} Welcome To ${place}!`);*/

/*
//MULTILINE STRINGS
let multilineString = `This is 
    a MULTILINE STRING 
        the string are written in
            different lines`;

console.log(multilineString);
// This is 
//     a MULTILINE STRING 
//         the string are written in
//             different lines*/

/*//EXPRESSIONS
let a = 5;
let b = 10;
let result = `sum of ${a} + ${b} is ${a + b}`;
console.log(result); // sum of 5 + 10 is 15*/

/*//OBJECTS
let user = {
    firstName: "John",
    lastName: "Deer",
    position: "Manager"
};
let userInfo = `User Info:
    Name: ${user.firstName} ${user.lastName}.
    Position: ${user.position}.`;
console.log(userInfo);
// User Info:
//     Name: John Deer.
//     Position: Manager.*/

/*
// If Already have Backtick in it
let e = "This is a BACKTICK ``";
console.log(e);// This is a BACKTICK ``
// Escaping Backticks (using \ )
let f = `This is a BACKTICK \`\``;
console.log(f);// This is a BACKTICK ``*/

/*//  ABOUT CONSOLE.LOG
console.log("Hello");
console.log("Hello", "World");
console.log("Hello", "World", "!");
// Console is an Object and log is a Method that is used to print something on the console.*/

/*
// Logging Multiple values
console.log("Name","John", "Age", 25) // Name John Age 25 (can also use + instead of comma (,)

//Using Variable
let name = "John";
let age = 25;
console.log("Name", name, "Age", age); // Name John Age 25
let num1 = 10;
let num2 = 20;
console.log("the sum is "+ (num1 + num2)); // the sum is 30
console.log(`the sum is ${num1 + num2}`); // the sum is 30

// Logging Objects
let person = {
    name: "Charlie",
    age: 28,
    profession: "Developer"
};
console.log(person.name); // Charlie
console.log(person); // {name: "Charlie", age: 28, profession: "Developer"}

//Formatted Output
console.log("The value of num1 is %d", num1);
// using placeholder(%d) for num 1 (like C and Java)
console.log("Hello, %s. You are %d years old!", person.name, person.age); // Hello, Charlie. You are 28 years old!
console.log("Hello, %s. You are %d years old!", "Manish", 21);// Hello, Manish. You are 21 years old!
*/

/*
//Console Methods (Like log)
console.error("This is an ERROR!!!"); // displayed in red
console.warn("This is a Warning!!"); // displayed in yellow
console.info("This is Information!"); // displayed normally

let person = {
    name: "Charlie",
    age: 28,
    profession: "Developer"
};
// Console Table
console.log(person); // { name: 'Charlie', age: 28, profession: 'Developer' }
console.table(person); // displayed in a table.

// Clearing Console
console.clear();
*/

