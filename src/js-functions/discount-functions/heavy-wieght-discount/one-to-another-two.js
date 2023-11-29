const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');

function calculateOneToAnotherTwo(inputWidth){
    let output = (inputWidth + 7) / 3;
    return output;
};

module.exports = calculateOneToAnotherTwo;

// calculateWidth(userInputs.widthInput);
console.log("the width is", calculateOneToAnotherTwo(userInputs.widthInput));