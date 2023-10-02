// let inputWidth = document.getElementById('').value;
let inputWidth = 60;
const { widthDscMeasure } = require('./const.js');

function calculateWidth(inputWidth){
    let outputWidth = inputWidth - widthDscMeasure;
    return outputWidth;
};

module.exports = calculateWidth;

// calculateWidth(inputWidth);
console.log("the width is", calculateWidth(inputWidth));