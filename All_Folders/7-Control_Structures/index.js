/*
CONTROL STRUCTURES/STATEMENTS IN JAVASCRIPT
If Else
Switch Statements
For Loop
While Loop*/

// IF ELSE STATEMENT
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
// Output => You are eligible to vote

let fruits = ["Apple", "Banana", "Orange"];
if (fruits.includes("Strawberry")){
    console.log("You Have Strawberry!")
}else {
    console.log("You Don't Have Strawberry!")
}
// Output => You Don't Have Strawberry!

// SWITCH STATEMENT
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
// Output => Wednesday

// FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(i);
}       
// Output => 1
//           2
//           3
//           4
//           5
//           6
//           7
//           8
//           9
//           10

// WHILE LOOP
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// Output => 1
//           2
//           3
//           4
//           5
//           6
//           7
//           8
//           9
//           10