// Immediately Invoked Function Expressions (IIFE)
// IIFE is used to remove the pollution of global scope


// Named IIFE
(function chai (){
  console.log(`DB CONNECTED`);
})();
// Here: first () -> function definition and second () -> function execution
// chai(); 

// Unnamed IIFE
(() => {
  console.log(`DB CONNECTED AGAIN`);
} )();

// If the previous IIFE is not terminated (;) then it will cause error because it does not know when to end

// IIFE with parameters
((name) => {
  console.log(`Hello, ${name}`);
}) ("Manish");