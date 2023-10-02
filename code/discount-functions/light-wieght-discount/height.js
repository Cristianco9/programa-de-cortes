const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');

function calculateHeight(inputHeight){
    let outputHeight = inputHeight - discountValues.heightDscMeasure;
    return outputHeight;
};

module.exports = calculateHeight;

// calculateHeight(userInputs.heightInput);
console.log("the height is", calculateHeight(userInputs.heightInput));