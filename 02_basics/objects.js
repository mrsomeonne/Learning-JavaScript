/********************* OBJECTS *********************/
// Singleton -> one object // if the objects is made using constructor then it is called as Singleton
// Objects Literal -> if the object is made using {} then it is called as Objects Literal

// Object.create() // Singleton

// Objects Literal

const mySym = Symbol("key1");

const jsUser = {  // Objects have keys and values, here key is name and value is Manish
  name: "Manish",
  "Full Name": "Manish Khadka",  // cannot access values like this using DOT
  age: 21,
  [mySym]: "key1", // symbol
  location: "Kathmandu",
  email: "manishkhadka.com.np",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"]
};
/* // accessing
console.log(jsUser.name); // Manish // access using DOT
console.log(jsUser["email"]); // manishkhadka.com.np
console.log(jsUser["Full Name"]); // Manish Khadka

// getting a symbol and adding it to an object and using key as a symbol
console.log(jsUser[mySym]); // key1


jsUser.email= "manishkhadka.com"; //overriding value
console.log(jsUser.email);
Object.freeze(jsUser); // changes the object to read-only

jsUser.name ="Someonne";
console.log(jsUser.name); // Manish
console.log(jsUser); */


jsUser.greeting = function(){
  console.log("Hello JS User!!");
}
console.log(jsUser.greeting()); // Hello JS User!!
console.log(jsUser.greeting); // [Function: greeting] // function return back (function is not executed)

jsUser.greeting2 = function(){
  console.log(`Hello JS User!! ${this["Full Name"]}`);
}
console.log(jsUser.greeting2()); // Hello JS User!! Manish Khadka