document.getElementById('convert').onclick = function () {
    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;
    let convertedTemp = unit === 'C' ? (temp * 9 / 5) + 32 : (temp - 32) * 5 / 9
    document.getElementById('converted').textContent = convertedTemp.toFixed(2);
};
/*
-> .toFixed: decimal cap to 2 places
-> .value: gets the value of the input
-> .textContent: sets the text content of the element

=> Using Ternary operators to check if the unit is C or F
 */