function validateFormValues() {

  let place = document.getElementById('lugar').value;
  let width = document.getElementById('ancho').value;
  let height = document.getElementById('altura').value;
  let guides = document.getElementById('guia').value;
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

  if (!guidesRegex.test(guides)) {
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

  if (!validateDivisorHeight(height, divisorHeight)) {
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
  const areGuidesValid = validateField(guidesInput, guidesRegex);
  const isDivisorHeightValid = validateField(divisorHeightInput, divisorHeightRegex);
  const areNotesValid = validateField(notesInput, notesRegex);

  return isPlaceValid && isWidthValid && isHeightValid && areGuidesValid && isDivisorHeightValid && areNotesValid;
}

function validateDivisorHeight(height, divisorHeight) {
  const divisorHeightRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;

  const isValidRegex = divisorHeightRegex.test(divisorHeight);
  const isValidHeightComparison = divisorHeight <= height;

  if (!isValidRegex) {
    divisorHeightInput.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!isValidHeightComparison) {
    divisorHeightInput.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  divisorHeightInput.style.boxShadow = '';
  return true;
}

const placeRegex = /^.{2,15}$/;
const widthRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;
const heightRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;
const guidesRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;
const divisorHeightRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;
const notesRegex = /^.{0,199}$/;

const placeInput = document.getElementById('lugar');
const widthInput = document.getElementById('ancho');
const heightInput = document.getElementById('altura');
const guidesInput = document.getElementById('guia');
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

guidesInput.addEventListener('input', function() {
    validateField(guidesInput, guidesRegex);
});

divisorHeightInput.addEventListener('input', function() {
    validateField(divisorHeightInput, divisorHeightRegex);
});

notesInput.addEventListener('input', function() {
    validateField(notesInput, notesRegex);
});
