console.log("Hello, World!!")
//this is single line comment
/* 
  This is multi line comment
*/
/**
 * doc style comment
 * Adds two numbers together
 * 
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} The sum of a + b
 */
/* function add(a,b){
  return a+b;
}
console.log(add) */

document.getElementById('name').innerText= 'Hello paragraph'

document.getElementById('changeTextButton').onclick = function (){
  document.getElementById('name').innerText= 'Hello again !'
  document.getElementById('name').style.background= 'red'
  document.getElementById('name').style.color= 'white'
}