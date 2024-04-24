export const calculateWidth = (inputWidth) => {
  let outputWidth = inputWidth - 7.2;
  return outputWidth;
};
// cuando perfil sea semcillo y apertura fija
// cantidad de perfil altura = 2
// cantidad de perfil ancho = 2
// cantidad de perfil divisor = 1
// cantidad de adaptador = 1
// cantidad de cabezal = 1
// cantidad de t77 = 1
// cantidad de angulo 3/4 = 1

export const calculateHeight = (inputHeight) => {
  let outputHeight = inputHeight - 11.8;
  return outputHeight;
};

export const calculateWidthOneToAnother = (inputWidth) => {
  let outputWidth = (inputWidth - 10.9) / 2;
  return outputWidth;
};
// cuando perfil sea doble y apertura uno hala otro
// cantidad de perfil altura = 4
// cantidad de perfil ancho = 4

export const calculateHeavyWidthDivisorOneToAnother = (inputWidth) => {
  let outputWidth = (inputWidth + 3.5) / 2;
  return outputWidth;
};

export const calculateWidthOneToAnotherTwo = (inputWidth) => {
  let outputWidth = (inputWidth + 7) / 3;
  return outputWidth;
};

export const calculateWidthPickUpCenter = (inputWidth) => {
  let outputWidth = (inputWidth - 14.4) / 2;
  return outputWidth;
};
// cuando perfil sea doble y apertura cierre al centro
// cantidad de perfil altura = 4
// cantidad de perfil ancho = 4
// cantidad de perfil divisor = 2
// cantidad de perfil D28 = 1
// cantidad de cabezal = 1
// cantidad de adaptador = 1

export const calculateWidthDivisorPickUpCenter = (inputWidth) => {
  let outputWidth = (inputWidth / 2);
  return outputWidth;
};

export const calculateHeavyD28PickUpCenter = (inputHeight) => {
  let outputHeight = (inputHeight - 4.8);
  return outputHeight;
};

export const calculateWidthFixed = (inputWidth) => {
  let outputWidth = inputWidth - 7.2;
  return outputWidth;
};

export const calculateHeightFixed = (inputHeight) => {
  let outputHeight = inputHeight - 7.2;
  return outputHeight;
};

export const calculateWidthThreeShips = (inputWidth) => {
  let outputWidth = (inputWidth - 14.6) / 3;
  return outputWidth;
};
// cuando perfil sea tres naves y apertura uno hala otro
// cantidad de perfil altura = 6
// cantidad de perfil ancho = 6
// cantidad de perfil divisor = 3
// cantidad de cabezal = 1
// cantidad de ducha  = 1
// cantidad de adaptador  = 1
// cantidad de cillar ducha  = 1
// angulo 3/4 = 1

export const calculateWidthDivisorThreeShips = (inputWidth) => {
  let outputWidth = (inputWidth + 7) / 3;
  return outputWidth;
};

export const calculateWidthDivisorFourShips = (inputWidth) => {
  let outputWidth = (inputWidth + 7) / 4;
  return outputWidth;
};

export const calculateWidthFourShips = (inputWidth) => {
  let outputWidth = (inputWidth - 21.8) / 4;
  return outputWidth;
};
// cuando perfil sea cuatro naves y apertura cierre al centro
// cantidad de perfil altura = 8
// cantidad de perfil ancho = 8
// cantidad de perfil divisor = 4
// cantidad de cabezal = 1
// cantidad de ducha  = 1
// cantidad de D28  = 1
