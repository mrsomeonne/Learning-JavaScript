// Promise
// Promise is an OBJECT that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
  // DB calls, Cryptography, Network

  setTimeout(function(){
    console.log("Async task is completed");
    resolve(); // fulfilled : this will resolve the promise and execute the then method
  }, 1000)
});

//Without storing on a variable
promiseOne.then(function () {
  console.log("Promised Consumed");
  
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve();
  },1000)
}).then(function(){
  console.log("Async task 2 is resolved");
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
   resolve({username: "Manish", email: "manish@example.com"});
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(() => {
    let error = false;
    if(!error){
      resolve({username: "Manish", email: "manish@example.com"});
    }else{
      reject("There is an error in the promise")
    }
  }, 2000);
})

promiseFour.then((user) => {
  console.log(user);
  return user.username
  
}).then((username) => {
  console.log(username);
  
}).catch(function(error){
  console.log(error);
  
}).finally(function(){
  console.log("Promise is finished");
})

const promiseFive = new Promise(function(resolve, reject){
  setTimeout(() => {
    let error = true;
    if(!error){
      resolve({username: "JavaScript", password: "123"});
    }else{
      reject("There is an error in the promise")
    }
  }, 2000);
})

async function consumePromiseFive(){
  try{
  const response = await promiseFive
  console.log(response);
  }catch(error){
    console.log(error);
    
  }
}

consumePromiseFive();


// Prepare for next lesson
/* 
async function getAllUsers(){
try {
  const response = await fetch ("https://jsonplaceholder.typicode.com/users");
  const data = response.json();
  console.log(data);
} catch (error) {
  console.log("E.", error);
  
}
  
}

getAllUsers(); */

/* //Without catch 
fetch ("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data)); */

//With catch handling
fetch ("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));



