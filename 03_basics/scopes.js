// Scopes => Global and Local Scope

// Global Scope
var a = 100;
// let b = 20;
// const c = 30;


// I will be confusing when {} -  curly braces are introduces
// {} -> if its comes in a function or if else then it is a Scope of that function or else.

// Example Block Scope
if(true){
  let a = 10;
  const b = 20;
  // var c = 30;
  console.log("Inner: ",a);
  
}

console.log(a); 
// console.log(b);
// ERROR : while logging a and b because it is not defined in the global scope
// console.log(c);
// NOTE: c will be logged because of the use of var 
// This is the one reason to avoid var due to its scope

//Inner: a => 10
// a => 100 (Globally)

// Scope in for loop
for (let index = 0; index < 5; index++) {
  const element = index;
  // Index have scope only inside the for loop
}

/********************* */

