let colorPara = document.getElementById('color');
// console.log(colorPara)
colorPara.textContent = "#FFFFFF";

document.getElementById('generate').onclick = function () {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorPara.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
}
/* 
   -> Math.random(): Generates a random number between 0 and 1
   this number should be multiplied by 16777215 <- This number because
   it represents the max value for 24 bit
   color in hexadecimal code (hex code #FFFFFF)
   -> Math.floor(): Converts the random float number to the lowest integer
   -> .toString(16): Converts the integer to a hexadecimal string
   document.body.style.backgroundColor = Sets the background color of the body
*/