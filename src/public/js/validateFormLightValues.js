function validateFormValues() {

  let place = document.getElementById('lugar').value;
  let widthOne = document.getElementById('ancho').value;
  let widthTwo = document.getElementById('anchoOpcional').value;
  let height = document.getElementById('altura').value;
  let guides = document.getElementById('guia').value;
  let divisorHeightOne = document.getElementById('alturaDivisor').value;
  let notes = document.getElementById('notas').value;

  if (!placeRegex.test(place)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!widthOneRegex.test(widthOne)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!widthTwoRegex.test(widthTwo)) {
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

  if (!divisorHeightOneRegex.test(divisorHeightOne)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!notesRegex.test(notes)) {
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!validateDivisorHeight(height, divisorHeightOne)) {
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
  const isWidthOneValid = validateField(widthOneInput, widthOneRegex);
  const isWidthTwoValid = validateField(widthTwoInput, widthTwoRegex);
  const isHeightValid = validateField(heightInput, heightRegex);
  const areGuidesValid = validateField(guidesInput, guidesRegex);
  const isDivisorHeightOneValid = validateField(divisorHeightOneInput, divisorHeightOneRegex);
  const isDivisorHeightTwoValid = validateField(divisorHeightTwoInput, divisorHeightTwoRegex);
  const areNotesValid = validateField(notesInput, notesRegex);

  return isPlaceValid && isWidthOneValid && isWidthTwoValid && isHeightValid && areGuidesValid && isDivisorHeightOneValid && isDivisorHeightTwoValid && areNotesValid;
}

function validateDivisorHeight(height, divisorHeightOne) {
  const divisorHeightOneRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;
  const isValidOneRegex = divisorHeightOneRegex.test(divisorHeightOne);
  const isValidHeightComparison = divisorHeight <= height;

  if (!isValidOneRegex) {
    divisorHeightOneInput.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  if (!isValidHeightComparison) {
    divisorHeightOneInput.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    return false;
  }

  divisorHeightOneInput.style.boxShadow = '';
  return true;
}

const placeRegex = /^.{2,15}$/;
const widthOneRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;
const widthTwoRegex = /^(?:1000(?:\.0)?|[1-9]\d{0,2}(?:\.\d)?|0(?:\.\d)?)$/
const heightRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;
const guidesRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;
const divisorHeightOneRegex = /^(?:10(?:\.0)?|[1-9]\d{1,2}(?:\.\d)?|1000(?:\.0)?)$/;
const divisorHeightTwoRegex = /^(?:1000(?:\.0)?|[1-9]\d{0,2}(?:\.\d)?|0(?:\.\d)?)$/
const notesRegex = /^.{0,199}$/;

const placeInput = document.getElementById('lugar');
const widthOneInput = document.getElementById('ancho');
const widthTwoInput = document.getElementById('anchoOpcional');
const heightInput = document.getElementById('altura');
const guidesInput = document.getElementById('guia');
const divisorHeightOneInput = document.getElementById('alturaDivisor');
const divisorHeightTwoInput = document.getElementById('alturaDivisorOpcional');
const notesInput = document.getElementById('notas');

placeInput.addEventListener('input', function() {
    validateField(placeInput, placeRegex);
});

widthOneInput.addEventListener('input', function() {
    validateField(widthOneInput, widthOneRegex);
});

widthTwoInput.addEventListener('input', function() {
  validateField(widthTwoInput, widthTwoRegex);
});

heightInput.addEventListener('input', function() {
    validateField(heightInput, heightRegex);
});

guidesInput.addEventListener('input', function() {
    validateField(guidesInput, guidesRegex);
});

divisorHeightOneInput.addEventListener('input', function() {
    validateField(divisorHeightOneInput, divisorHeightOneRegex);
});

notesInput.addEventListener('input', function() {
    validateField(notesInput, notesRegex);
});
