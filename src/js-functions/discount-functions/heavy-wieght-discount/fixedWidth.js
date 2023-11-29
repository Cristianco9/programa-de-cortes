const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');

function calculateWidth(inputWidth){
    let outputWidth = inputWidth - discountValues.fixedWidthDscMeasure;
    return outputWidth;
};

module.exports = calculateWidth;

// calculateWidth(userInputs.widthInput);
console.log("the width of each side is:", calculateWidth(userInputs.widthInput));