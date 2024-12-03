/*********************FUNCTIONS ************************************ */

/* //Function = a block of code which is executed only when it is called

// instead of saying
// console.log("M");
// console.log("a");
// console.log("n");
// console.log("i");
// console.log("s");
// console.log("h");

// we can say using function
//Declare a function
function sayMyName(){
  console.log("M");
  console.log("a");
  console.log("n");
  console.log("i");
  console.log("s");
  console.log("h");
}
// sayMyName // reference
// sayMyName(); // execution */

/* // Parameters
function sum(a, b) {  // a,b -> Parameters
  console.log(a + b) ;
}
// sum(); // NaN 
// sum (3,4); // 7 
// sum ("20", 3); // 203 // JS conversion will take place
// sum(3 , 'a'); // 3a
// sum(3, null); // 3 // null is converted to 0
// // (2, 3) -> Arguments

const result = sum(2,3);
console.log("Result: ",result); 
// output
// 5
// Result: undefined */
 
/* // RETURN
function sum(a, b) {  // a,b -> Parameters
  // let result = a + b ;
  // return result;

  return a + b;

}

const result = sum(2,3);
console.log("Result: ",result); // Result: 5 */


function loginUserMessage(username = "sam") {  // saving sam as a default value
  if (username === undefined){                   // check if the argument is passed or not
    console.log("Please enter your username");
    return 
  }
  return `${username} Just Logged In!`
}
// loginUserMessage("Manish"); // Will not display anything / function has the return statement
console.log(loginUserMessage("Manish")); // Manish Just Logged In!


console.log(loginUserMessage()); // undefined Just Logged In!
