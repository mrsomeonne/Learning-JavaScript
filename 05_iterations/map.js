/********************************* MAP ****************************************** */

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumbers.map((num) => {
 return num + 10
})
console.log(newNums);
// output: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

/* //Same using ForEach
const newNums2 = [];
myNumbers.forEach((num) => {
  newNums2.push(num + 10)
})
console.log(newNums2); */

// Chaining
const numNew = myNumbers.map((num) =>
    num * 10
).map( (num) => num + 1)
.filter((num)=> num >=40)

console.log(numNew);
