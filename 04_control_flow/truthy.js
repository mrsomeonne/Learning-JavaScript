// TRUTHY and FALSY
// Truthy -> values that are considered true in a boolean context
// Falsy -> values that are considered false in a boolean context

// const userEmail = "example@gmail.com" // TRUE
// const userEmail = "" // FALSE
const userEmail = []; // TRUE

if (userEmail){
  console.log("Got User Email!!");
  
}else{
  console.log("Don't have user email");
   
}

/* // Falsy Values
0,
-0,
BigInt: 0n,
"",
undefined,
null,
NaN */

/*// Truthy Values
"0" / '0',
'false' / "false",
" " / ' ' -> string with space,
[] -> array,
{} -> object,
function () {} -> Empty function
*/

if (userEmail.length === 0 ){
  console.log("Array is Empty");
  
}

const empObj = {}
if(Object.keys(empObj).length === 0){
  console.log("Object is Empty!");
  
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
val1 = undefined ?? 20; //20
val1 = null ?? 30 ?? 15 // 30

console.log(val1);

// Ternary Operator
// condition ? true : false (Very different form Nullish Coalescing Operator)

let iceTeaPrice = 60;
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");




