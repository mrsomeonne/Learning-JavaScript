/************************* REDUCE ************************************/

const myNums = [1,2,3,4,5];

/* // Using Function
const myTotal = myNums.reduce(function (acc, currVal){
  console.log(`acc : ${acc} and currVal: ${currVal}`);
  
  return acc + currVal;
},0)
console.log(myTotal);
 */

// Using arrow function

const myTotal = myNums.reduce((acc, currVal)=>{
  return acc + currVal;
},0)
console.log(myTotal);

const shoppingCart = [
  {
    name: "Shoes",
    price: 1200
  },
  {
    name: "Pants",
    price: 300
  },
  {
    name: "Shirt",
    price: 150
  }]

  let total = shoppingCart.reduce((acc, item) => acc + item.price ,0)
console.log(total);

