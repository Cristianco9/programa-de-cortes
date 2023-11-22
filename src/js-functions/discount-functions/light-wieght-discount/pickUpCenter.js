const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');

function calculatePickUpCenter(inputWidth){
    let output = inputWidth / 2;
    return output;
};

module.exports = calculatePickUpCenter;

// calculateWidth(userInputs.widthInput);
console.log("the width is", calculatePickUpCenter(userInputs.widthInput));