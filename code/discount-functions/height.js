// let inputHeight = document.getElementById('').value;
let inputHeight = 120;
const { heightDscMeasure } = require('./const.js');

function calculateHeight(inputHeight){
    let outputHeight = inputHeight - heightDscMeasure;
    return outputHeight;
};

module.exports = calculateHeight;

// calculateHeight(inputHeight);
console.log("the height is", calculateHeight(inputHeight));