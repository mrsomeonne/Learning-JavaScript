// IF - Statement // if (condition) { code }
if (true){
}

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("Hello, User!");
}

// Conditions:
// 1. Equal to (==)
// 2. Not Equal to (!=)
// 3. Strictly Equal to (===) -> Also checks the type
// 4. Strictly Not Equal to (!==)
// 5. Greater Than (>)
// 6. Less Than (<)
// 7. Greater Than or Equal to (>=)

if (2 == "2"){
  console.log("Executed");
}// Executed even if the datatypes is different

if (2 === "2"){
  console.log("Executed");
} // Will not be executed due to data types

//Else
const temp = 40 ;
if (temp < 50){
  console.log("Temperature is less than 50");
}else{
  console.log("Temperature is greater than 50");
}
  
// scope 
const score = 101
if (score > 100){
  let power = "FLY"
  console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); // Power out of Scope // If used var it can have scope

// NESTING Conditionals
const balance = 800
if (balance < 500) {
  console.log("Less than 500");
} else if (balance <750) {
  console.log('Less than 750');
}else{
  console.log("Greater than 750");
}

/*// LOGICAL OPERATORS:
  && -> AND
  || -> OR
  ! -> NOT
*/

// Multiple conditionals
const userLoggedIn = true;
const debitCard = true;

// AND
if (userLoggedIn && debitCard) {
  console.log("Allowed to go on the next step");
  
}

const loggedInFromGoogle = false;
const loggedInFromYahoo= true
// OR
if (loggedInFromYahoo || loggedInFromGoogle) {
  console.log("Logged In!!!"); 
}

