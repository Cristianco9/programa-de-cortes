// let inputheight = document.getElementById('').value;
let inputHeight = 120;
// const heightDsc = heightDscMeasure;
const heightDsc = 6;

export function calculateHeight(inputHeight){
    let outputHeight = inputHeight - heightDsc;
    return outputHeight;
};

// calculateHeight();
console.log("the height is", calculateHeight(inputHeight));