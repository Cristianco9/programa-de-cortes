export const calculateWidthFixed = (inputWidth) => {
  let outputWidth = inputWidth - 4
  return outputWidth;
};

export const calculateHeightFixed = (inputHeight) => {
  let outputHeight = inputHeight - 4
  return outputHeight;
};

export const calculateHeight = (inputHeight) => {
  let outputHeight = inputHeight - 6
  return outputHeight;
};

export const calculateWidthLateral = (inputWidth) => {
  let outputWidth = inputWidth - 4;
  return outputWidth;
};

export const calculateWidthOneToAnother = (inputWidth) => {
  let outputWidth = (inputWidth - 6) / 2;
  return outputWidth;
};

export const calculateWidthPickUpCenter = (inputWidth) => {
  let outputWidth = inputWidth - 4;
  return outputWidth;
};

export const calculateWidthThreeShips = (inputWidth) => {
  let outputWidth = (inputWidth + 4) / 3;
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
