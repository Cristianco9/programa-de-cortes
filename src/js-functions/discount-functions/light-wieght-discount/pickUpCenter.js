const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');

function calculatePickUpCentere(inputWidth){
    let output = inputWidth / 2;
    return output;
};

module.exports = calculatePickUpCentere;

// calculateWidth(userInputs.widthInput);
console.log("the width is", calculatePickUpCentere(userInputs.widthInput));