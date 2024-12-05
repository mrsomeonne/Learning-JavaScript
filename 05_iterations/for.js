/* // FOR LOOP
//Structure

for (let index = 0; index < array.length; index++) {
  const element = array[index]; 
} 
  */

/* for (let i = 0; i < 10; i++) {
  console.log(i);  
} // output 0 ot 9 */

/* for (let i = 0; i <=10; i++){
  const element = i;
  if(element == 5){
    console.log("Here comes 5!");
  }
  console.log(element);
  
} */

/* for (let i = 1; i <= 10 ; i++) {

  console.log(`Table Of: ${i}`);
  
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop Value: ${j} and Inner Loop Value: ${i}`);
    console.log(i + '*' + j + '=' + (i * j));
    
  }
  
} */

/* let myArray = ["Flash", "Batman", "Superman", "Wonder Woman", "Aquaman"];
for (let i = 0; i < myArray.length; i++) {
  console.log(`Index of Array : ${i}`);
  console.log(myArray[i]);
} */

// Break and Continue

//Break
for (let i = 1; i <= 20; i++) {
  if(i == 5){
    console.log("Detected 5");
    break;
  }
  console.log(`Value of i is: ${i}`);
}

//Continue

for (let i = 1; i <= 20; i++) {
  if(i == 5){
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of i is: ${i}`);
  // Value if i is : 5 -> Will not be printed other will continue normally
  // It will Print Detected: 5
}







