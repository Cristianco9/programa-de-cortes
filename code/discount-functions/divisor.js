// let inputWidth = document.getElementById('').value;
let inputWidth = 60;
const calculateWidth = require('./width.js');
const result = calculateWidth(inputWidth);
const widthDscMeasure = require('./const.js');
const discount = widthDscMeasure.widthDscMeasure;

function validateDivisor(inputWidth, result, discount){
    if ( inputWidth == result + discount ){
        return inputWidth;
    } else { return false }
};

module.exports = validateDivisor;
// validateDivisor(inputWidth, calculateWidth, widthDscMeasure) 
console.log("the divisor is:",validateDivisor(inputWidth, result, discount)) 