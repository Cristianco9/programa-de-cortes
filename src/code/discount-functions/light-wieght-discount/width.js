const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');

function calculateWidth(inputWidth){
    let outputWidth = inputWidth - discountValues.widthDscMeasure;
    return outputWidth;
};

module.exports = calculateWidth;

// calculateWidth(userInputs.widthInput);
console.log("the width is", calculateWidth(userInputs.widthInput));