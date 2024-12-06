const coding = ["Javascript", "Python", "C++", "Java", "C#"];

/* const values = coding.forEach((item)=> {
  console.log(item);
  return item
})
console.log(values);
// Did not return anything */

/*************************************** FILTER ***********************************/

const myNums = [1,2,3,4,5,6,7,8,9,10]
/* let newNums = myNums.filter((num) => {
  return num > 5
})
console.log(newNums); */
// Filters can return.


/* // Same Using ForEach
let newNums = [];
myNums.forEach((num) => {
  if (num > 5){
    newNums.push(num)
  }
})
console.log(newNums);
 */

const books = [{
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
  genre: "Thriller"
}, {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genre: "Thriller"
}, {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
  genre: "Romance"
}, {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  year: 1954,
  genre: "Fantasy"
}, {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Romance"
}, {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  genre: "Fantasy"
}]

let userBooks = books.filter((bk)=>
   bk.genre === "Thriller"
)
console.log(userBooks);

/* userBooks = books.filter((bk) => {
  return bk.year >=1900;
})
console.log(userBooks) */;

userBooks = books.filter((bk) => {
  return bk.year >=1900 && bk.genre === "Fantasy";
  
})
console.log(userBooks);
