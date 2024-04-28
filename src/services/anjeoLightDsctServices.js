export const calculateLightWidthFixed = (inputWidth) => {
  let outputWidth = inputWidth - 4
  return outputWidth;
};

export const calculateLightHeightFixed = (inputHeight) => {
  let outputHeight = inputHeight - 4
  return outputHeight;
};

export const calculateLightHeight = (inputHeight) => {
  let outputHeight = inputHeight - 6
  return outputHeight;
};

export const calculateLightWidthLateral = (inputWidth) => {
  let outputWidth = (inputWidth - 6) /2;
  return outputWidth;
};


export const calculateLightWidthDivisorLateral = (inputWidth) => {
  let outputWidth = (inputWidth = 2) /2;
  return outputWidth;
};

export const calculateLightWidthOneToAnother = (inputWidth) => {
  let outputWidth = (inputWidth - 6) / 2;
  return outputWidth;
};

export const calculateLightWidthPickUpCenter = (inputWidth) => {
  let outputWidth = (inputWidth - 8) / 2;
  return outputWidth;
};

export const calculateLightWidthThreeShips = (inputWidth) => {
  let outputWidth = (inputWidth - 8) / 3;
  return outputWidth;
};

export const calculateLightWidthDivisorThreeShips = (inputWidth) => {
  let outputWidth = (inputWidth + 4) / 3;
  return outputWidth;
};

export const calculateLightWidthDivisorPickUpCenter = (inputWidth) => {
  let outputWidth = inputWidth / 2;
  return outputWidth;
};


export const calculateLightD28PickUpCenter = (inputHeight) => {
  let outputHeight = (inputHeight - 2);
  return outputHeight;
};

export const calculateLightWidthDivisorOneToAnother = (inputDivisorHigh) => {
  let outputDivisorHigh = (inputDivisorHigh + 2) / 2;
  return outputDivisorHigh;
};
