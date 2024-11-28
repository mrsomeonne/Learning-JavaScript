const Unit_Converter = {
    mToFt: function (meters) {
        return meters * 3.28084
    },

    kgToLb: function (kilograms) {
        return kilograms * 2.20462;
    },

    cToF: function (celsius) {
        return (celsius * (9 / 5)) + 32;
    }
};
// Created function within object (method) due to grouping purpose

document.getElementById('convert').onclick = () => {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let conversionType = document.getElementById('conversionType').value;
    
    if (!isNaN(inputValue)) { // IF inputVaue is not notAnNumber
        let convertedValue = conversionType === 'mToFt' ? Unit_Converter.mToFt(inputValue) : conversionType === 'kgTolb' ? Unit_Converter.kgToLb(inputValue) : Unit_Converter.cToF(inputValue);
        document.getElementById('convertedValue').textContent = convertedValue.toFixed(2);
    }else {
        alert("PLEASE ENTER A VALID NUMBER!");
    }

};