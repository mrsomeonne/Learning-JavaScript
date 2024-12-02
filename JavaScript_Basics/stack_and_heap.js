// Stack , Heap -> Memory management
// Stack (Primitive) -> LIFO
// Heap (Non-Primitive) -> FILO

// Stack -> Value -> copy
let myYoutubeName="mrsomeonne";

let anotherName = myYoutubeName;
anotherName = "manish"

console.log(myYoutubeName);
console.log(anotherName);

// Heap -> value -> Reference
let userOne ={
  email: "example@gamil.com",
  upi: "example@upi"
}

let userTwo = userOne;

userTwo.email = "example2@gamil.com";
userTwo.upi = "example2@upi";

console.log(userOne.email); // Value changed for both ie, example2@gmail.com
console.log(userTwo.email); // example2@gmail.com
