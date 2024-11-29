/*
// TRY...Catch statement in JavaScript allows you to handle errors gracefully

//a(); // Uncaught ReferenceError: a is not defined
// function a(){
//     // If this function is created there is no error so Hi! is printed
// }
try {
    a();
    console.log("Hi!"); // not printed because error is above
} catch (error) {
    console.warn(error.message); // a is not defined
} finally {
    console.log("finally!!");
    // Will happen either there is error generated or not.
}*/

// DEBUGGING TECHNIQUES:
// -> Logging options
// -> Debugging in Browsers.
// -> Breakpoints

/*/!*
// Logging 

console.log("Hello World!");
//General log message

console.warn("This is a Warning");
// Warning Message

console.error("This is an Error!");
//Error Message

console.table([{name: "Manish", age: 21}, {name: "Niroj", age: 21}]);
// Display in a table.

// You can use console.log to find error by putting it in a program and depending on it's output.
*!/

// Debugging in Browser
function calculateSum(a, b) {
    let sum = a + b;
    console.log("Sum: ", sum);
    return sum
}

calculateSum(10, 20);

// Inspect -> Source -> Set Breakpoints*/

/*
// Network
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Fetched Data: ", data);
    } catch (error) {
        console.log(error)
    }
}
// jsonplaceholder.typicode -> free endpoints for test purpose
fetchData(); 
// Inspect -> Network*/

/*
// Nested Functions

function a() {
    console.log("Function A");
    b();
}

function b() {
    console.log("Function B");
    c();
}

function c() {
    console.log("Function C")
    // a(); // Recursion
}
a();  */
