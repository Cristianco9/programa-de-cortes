function validateFormValues() {

  let place = document.getElementById('lugar').value;
  let width = document.getElementById('ancho').value;
  let height = document.getElementById('altura').value;
  let head = document.getElementById('cabezal').value;
  let adaptador = document.getElementById('adaptador').value;
  let topProfile = document.getElementById('perfilSuperior').value;
  let divisorHeight = document.getElementById('alturaDivisor').value;
  let notes = document.getElementById('notas').value;

  if (!placeRegex.test(place)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!widthRegex.test(width)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!heightRegex.test(height)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!headRegex.test(head)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!adaptadorRegex.test(adaptador)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!topProfileRegex.test(topProfile)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!divisorHeightRegex.test(divisorHeight)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!notesRegex.test(notes)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  return true;
}

function validateField(input, regex) {
  const value = input.value;
  const isValid = regex.test(value);
  const boxShadow = isValid ? '' : '0px 5px 5px rgba(194, 18, 18, 0.6)';

  input.style.boxShadow = boxShadow;

  return isValid;
}

function validateForm() {
  const isPlaceValid = validateField(placeInput, placeRegex);
  const isWidthValid = validateField(widthInput, widthRegex);
  const isHeightValid = validateField(heightInput, heightRegex);
  const isHeadValid = validateField(headInput, headRegex);
  const isAdaptadorValid = validateField(adaptadorInput, adaptadorRegex);
  const isTopProfileValid = validateField(topProfileInput, topProfileRegex);
  const isDivisorHeightValid = validateField(divisorHeightInput, divisorHeightRegex);
  const areNotesValid = validateField(notesInput, notesRegex);

  return isPlaceValid && isWidthValid && isHeightValid && isHeadValid && isAdaptadorValid && isTopProfileValid && isDivisorHeightValid && areNotesValid;
}

const placeRegex = /^.{2,15}$/;
const widthRegex = /^(20|2[1-9]|[3-9][0-9]|[1-7][0-9]{2}|800)(\.[0-9])?$/;
const heightRegex = /^(140|1[4-9]\d|2[0-9]\d|300|31[0-9]|32[0-9]|33[0-9]|34[0-9]|349)(\.\d)?$|^350$/;
const headRegex = /^(10|[1-9]\d{1,2}|1[01]\d{2})(\.\d)?$|^1200$/;
const adaptadorRegex = /^(10|[1-9]\d{1,2}|1[01]\d{2})(\.\d)?$|^1200$/;
const topProfileRegex = /^(0|[1-9]\d{0,2})(\.\d)?$|^1000$/;
const divisorHeightRegex = /^((\d{1,2}|1\d{2}|2[0-9]{2}|3[0-4][0-9])(\.\d)?)$|^350$/;
const notesRegex = /^.{0,199}$/;

const placeInput = document.getElementById('lugar');
const widthInput = document.getElementById('ancho');
const heightInput = document.getElementById('altura');
const headInput = document.getElementById('cabezal');
const adaptadorInput = document.getElementById('adaptador');
const topProfileInput = document.getElementById('perfilSuperior');
const divisorHeightInput = document.getElementById('alturaDivisor');
const notesInput = document.getElementById('notas');

placeInput.addEventListener('input', function() {
    validateField(placeInput, placeRegex);
});

widthInput.addEventListener('input', function() {
    validateField(widthInput, widthRegex);
});

heightInput.addEventListener('input', function() {
    validateField(heightInput, heightRegex);
});

headInput.addEventListener('input', function() {
    validateField(headInput, headRegex);
});

adaptadorInput.addEventListener('input', function() {
  validateField(adaptadorInput, adaptadorRegex);
});

topProfileInput.addEventListener('input', function() {
  validateField(topProfileInput, topProfileRegex);
});

divisorHeightInput.addEventListener('input', function() {
    validateField(divisorHeightInput, divisorHeightRegex);
});

notesInput.addEventListener('input', function() {
    validateField(notesInput, notesRegex);
});
