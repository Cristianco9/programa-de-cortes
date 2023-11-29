const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');

function calculateClosedToCenter(inputWidth){
    let output = inputWidth / 2;
    return output;
};

module.exports = calculateClosedToCenter;

// calculateWidth(userInputs.widthInput);
console.log("the width is", calculateClosedToCenter(userInputs.widthInput));