/**************************OBJECTS PT.2 **********************/
/* 
// Singleton Object
const instaUserSing = new Object();
console.log(instaUserSing);

// Objects Literal (Non Singleton)
const instaUser = {};
console.log(instaUser);

instaUser.id = "123abc";
instaUser.name = "Harry";
instaUser.isLoggedIn = true;
console.log(instaUser); // { id: '123abc', name: 'Harry', isLoggedIn: true }

const regularUser = {
  email : "harryone@gmail.com" ,
  fullName: {
    userFullName : {
      firstName : "Harry",
      lastName : "Lewis"
    }
  }
}
console.log(regularUser.fullName); // { userFullName: { firstName: 'Harry', lastName: 'Lewis' } }
console.log(regularUser.fullName.userFullName); // { firstName: 'Harry', lastName: 'Lewis' }
console.log(regularUser.fullName.userFullName.firstName); // Harry */

// Combining Objects
const obj1 = {
  1: 'a',
  2: 'b'
}
const obj2 = {
  3: 'a',
  4: 'b'
}

const obj3 = {obj1, obj2};
console.log(obj3); // cause problem like in array ie, array within a array
// output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2); // {} -> empty object
console.log(obj4);
// output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {
  5: 'a',
  6: 'b'
}
const obj6 = Object.assign({},obj1, obj2, obj5);
console.log(obj6);
// output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//Spread Operator
const obj7 = {...obj1, ...obj2, ...obj5};
console.log(obj7);
// output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Data form DataBase will come as arrays of objects.

const users = [
  {
    id: 1,
    email: "example.com"
  },
  {
    id: 2,
    email: "example2.com"
  },
  {
    id: 3,
    email: "example3.com"
  }
]

console.log(users[1].email); //example2.com

const newUser = {
  id: "123abc",
  name: "Harry",
  isLoggedIn: true
}
console.log(newUser);
console.log(Object.keys(newUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(newUser)); // [ '123abc', 'Harry', true ]
console.log(Object.entries(newUser)); // [ [ 'id', '123abc' ], [ 'name', 'Harry' ], [ 'isLoggedIn', true ] ]

console.log(newUser.hasOwnProperty("name")); // true
console.log(newUser.hasOwnProperty("email")); // false


