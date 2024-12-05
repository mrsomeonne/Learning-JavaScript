/*************************************FOR_EACH***************************************/

/* //SYNTAX
array.forEach(element => {
  
}); */

// like declaring a function except the function name is not needed

const coding = ["Javascript", "Python", "C++", "Java", "C#"];

// coding.forEach( function (item) {
//   console.log(item);
// })

/* // Arrow function

coding.forEach( item => {
  console.log(item);
  // output -> Javascript Python C++ Java C#
}) */

/* // By creating a separate function
function printMe(item){
  console.log(item);
  
}
coding.forEach(printMe); */

/* //Printing all item index and array
coding.forEach((item, index , array) => {
  console.log(item , index, array);
}) */

const myCoding = [{
  name : "Javascript",
  type : "Scripting"
},
{
  name : "Python",
  type : "Scripting"
},
{
  name : "C++",
  type : "Scripting"
},
{
  name : "Java",
  type : "Scripting"
},
{
  name : "C#",
  type : "Scripting"
}]

myCoding.forEach( item => {
  console.log(item);
  // output -> { name: 'Javascript', type: 'Scripting' } { name: 'Python', type: 'Scripting' } { name: 'C++', type: 'Scripting' } { name: 'Java', type: 'Scripting' } { name: 'C#', type: 'Scripting' }
})

myCoding.forEach(item => {
  console.log(item.name);
  // output -> Javascript Python C++ Java C#
})

myCoding.forEach(item => {
  console.log(item.type);
  // output -> Scripting Scripting Scripting Scripting Scripting
})

myCoding.forEach(item => {
  console.log(item.name, item.type);
  // output -> Javascript Scripting Python Scripting C++ Scripting Java Scripting C# Scripting
})



