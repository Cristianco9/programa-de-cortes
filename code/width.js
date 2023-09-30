// let inputWidth = document.getElementById('').value;
let inputWidth = 120;
// const widthDsc = widthDscMeasure;
const widthDsc = 6;

function calculateWidth(inputWidth){
    let outputWidth = inputWidth - widthDsc - widthDsc;
    return outputWidth;
};

//calculateWidth();
console.log("the width is", calculateWidth());