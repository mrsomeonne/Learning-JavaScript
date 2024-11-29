/*
Asynchronous JavaScript
Callbacks
Promises
async / await
*/

/*
// CALLBACK
/!*
 A callback is a function that is passed as an argument to another function and is executed after the completion
 of that function/event/operation*!/

// API
console.log("Immediate"); // Immediate

// Simulating a Delay 
setTimeout(function () {
    console.log("delay");
}, 2000); // delay (Appears only after 2000ms)

function fetchData() {
    setTimeout(() => {
        console.log("Data From Server.....");
        return "Sample Data";
    }, 2000);
}

function processData() {
    fetchData();
    console.log("Processing Data");

}

processData(); // Processing Data
// delay
// Data From the Server.....

function processDataWithoutDelay() {
    let data = fetchData();
    console.log(data);
}

// processDataWithoutDelay(); -> Will not fetch data from server
// Because the process was instant but data have delay of 2 second 

function fetchDataWithCallback(callback) {
    setTimeout(() => {
        console.log("Callback Data From Server.....");
        data = "Sample Data with callback";
        callback(data);
    }, 2000);
}

function processDataWithCallback(data) {
    console.log("With Callback", data)
}

fetchDataWithCallback(processDataWithCallback);
// Callback Data From Server.....
// index.js:55 With Callback Sample Data with callback
// Here It executes when the delay is completed and data is available. It waits for data to be collected.

// ANONYMOUS callback Function
function fetchDataWithAnon(callback) {
    setTimeout(() => {
        let data = "Sample Data"
        callback(data);
    }, 10000);
}

fetchDataWithAnon(function (data) {
    console.log("With Anon: ", data)
});
// With Anon: Sample Data after 10s

// Callbacks for Success as well as Errors
function fetchDataWithSuccessError(successCallback, errorCallback) {
    setTimeout(() => {
        let errorOccurred = (Math.random() < 0.5);
        if (errorOccurred) {
            errorCallback("Error Occurred!");
        } else {
            let data = "Sample Data For Success / Error"
            successCallback(data);
        }
    }, 5000)
}

function onSuccess(data) {
    console.log("Success: ", data);
}

function onError(data) {
    console.log("Error: ", data);
}

fetchDataWithSuccessError(onSuccess, onError);

//Anon
fetchDataWithSuccessError((data) => {
    console.log("Success: ", data);
}, (data) => {
    console.log("Error : ", data);
})

// CHAINED CALLBACKS / (also known as)Callback Hell
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 Done")
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 Done")
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 Done")
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All Completed!")
        });
    });
});

// Use Callbacks with Array Methods
let numbers = [1,2,3,4,5,6];
let doubledNumbers = numbers.map(function (number){
    return number *  2 ;
});
console.log(doubledNumbers);
*/

/*// PROMISES
// -> Promises provide a cleaner and more structured way to handle asynchronous operations.
// => then() -> When promise is fulfilled
// => catch() -> When promise is rejected

// Better approach than Callbacks (due to callback hell )

// With Promises

// When doing an Asynchronous Operation there an be two Sates that can occur (Successful, NotSuccessful)
// resolve -> operation was Successful
// reject -> operation was Not Successful
function getDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: "Manish", age: 21};
            resolve(data)
        }, 1000);
    });
}

getDataWithPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
// Then -> Successful fulfillment (like try)
// Catch -> Error fulfillment (like catch)

// With Promises : Success and Failure
function getDataWithPromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() < 0.5;
            if (success) {
                const data = {name: "Manish Success", age: 21};
                resolve(data)
            } else {
                reject("Error");
            }
        }, 1000);
    });
}

getDataWithPromise1().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => { // Like try catch's finally.
    console.log("Finally Completed!")
})

//Multiple Promises 
let promise1 = getDataWithPromise1();
let promise2 = getDataWithPromise1();
let promise3 = getDataWithPromise1(); 

Promise.all([promise1, promise2, promise3]).then((data) => {
    console.log("All Done",data);
}).catch((error) => {
    console.log("Atleast one promise failed: ", error);
}); 

// If any one of the promise is failed then it is a failed scenario.

Promise.race([promise1, promise2, promise3]).then((data) => {
    console.log("This Done (Race)", data);
}).catch((error) => {
    console.log("Race: ", error);
})

// Race -> Get first promise that is resolved.*/

/*// ASYNC / AWAIT
//-> Simplifies asynchronous code by making it look like a synchronous code. 
// -> It improvers readability and makes error handling straightforward with `try-catch`.
// -> You can use `async/await` with multiple asynchronous operations, Http Requests, Database Operations etc.

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let success = Math.random() < 0.5;
            if (success){
                const data = {name: "Manish Success", age: 21};
                resolve(data)
            }else {
                reject("Error");
            }
        },1000)
    }); 
}
/!*
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})*!/

// If first failed it will not execute next
async function getDataAsync() {
    try{
        let data1 = await getData();
        console.log("1:",data1);
        
        let data2 = await getData();
        console.log("2:", data2)

        let data3 = await getData();
        console.log("2:", data3)
    }catch (error){
        console.log("ERROR:",error); 
    }
}
getDataAsync(); */    