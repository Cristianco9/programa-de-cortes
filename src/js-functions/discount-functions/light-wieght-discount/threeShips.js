const userInputs = require('../../anjeos-obj/user-inputs');
const discountValues = require('./discount-values');

function calculateThreeShips(inputWidth){
    let output = (inputWidth + 4) / 3;
    return output;
};

module.exports = calculateThreeShips;

// calculateWidth(userInputs.widthInput);
console.log("the width is", calculateThreeShips(userInputs.widthInput));