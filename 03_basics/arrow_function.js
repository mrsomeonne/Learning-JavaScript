/* const user = {

  username: "Manish",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
    
    // this -> Current context
  }
  
}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();  // changed the context so the current context is Sam (this.)

console.log(this)  */

/* function chai(){
  let username = "Manish";
  console.log(this.username); //(this.username) -> undefined
}
chai(); */

// ARROW FUNCTION

// const chai() = function {
//   let username = "Manish";
//   console.log(this.username); //(this.username) -> undefined
// }
// chai();

const chai = () => {
  let username = "Manish";
  console.log(this); //(this.username) -> undefined [this -> empty object different form the regular function]
}
chai();

() => { //basic arrow function

}
// can be declared inside variable
const simple = () => {

}
// Can take parameters
const addTwo = (num1, num2) => {
  return num1 + num2;
}
console.log(addTwo(5,8));

//Implicit return (no need to include return keyword)
const addThree = (num1, num2, num3) => (num1 + num2 + num3);  // if curly braces are used you must include return keyword.
console.log(addThree(5,6,7));

// Explicit return
// To return object you must wrap inside parenthesis
const sum = (one, two) => ({username: "manish"})
console.log(sum(3,4));

