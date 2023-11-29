const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');

function calculateOneToAnother(inputWidth){
    let output = (inputWidth + 3.5) / 2;
    return output;
};

module.exports = calculateOneToAnother;

// calculateWidth(userInputs.widthInput);
console.log("the width is", calculateOneToAnother(userInputs.widthInput));