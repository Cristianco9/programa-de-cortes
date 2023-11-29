const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');
const calculateWidth = require('./width');
const result = calculateWidth(userInputs.widthInput);

function validateDivisor(inputWidth, result, discount){
    if ( inputWidth == result + discount ){
        return inputWidth;
    } false
};

module.exports = validateDivisor;
// validateDivisor(inputWidth, calculateWidth, widthDscMeasure) 
console.log("the divisor is:",validateDivisor(userInputs.widthInput, result, discountValues.widthDscMeasure)) 