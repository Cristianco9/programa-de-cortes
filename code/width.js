// let inputWidth = document.getElementById('').value;
let inputWidth = 60;
// const widthDsc = widthDscMeasure;
const widthDsc = 4;

export function calculateWidth(inputWidth){
    let outputWidth = inputWidth - widthDsc;
    return outputWidth;
};

//calculateWidth();
console.log("the width is", calculateWidth(inputWidth));