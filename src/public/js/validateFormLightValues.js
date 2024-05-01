function validateFormValues() {

  let place = document.getElementById('lugar');
  let widthOne = document.getElementById('ancho');
  let widthTwo = document.getElementById('anchoOpcional');
  let height = document.getElementById('altura');
  let guides = document.getElementById('guia');
  let divisorHeight = document.getElementById('alturaDivisor');
  let divisorQuantity = document.getElementById('cantidadDivisor');
  let notes = document.getElementById('notas');

  if (widthTwo.value === "") {
    widthTwo.value = "0";
  }

  if (guides.value === "") {
    guides.value = "0";
  }

  if (divisorHeight.value === "") {
    divisorHeight.value = "0";
  }

  if (divisorQuantity.value === "") {
    divisorQuantity.value = "0";
  }

  if (!placeRegex.test(place.value)) {
    place.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "El lugar de instalación del anjeo debe estar entre 2 y 15 caracteres. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!widthOneRegex.test(widthOne.value)) {
    widthOne.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "El ancho del anjeo debe estar entre 7 y 150 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!widthTwoRegex.test(widthTwo.value)) {
    widthTwo.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "El ancho del anjeo debe estar entre 0 y 150 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!heightRegex.test(height.value)) {
    height.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "El alto del anjeo debe estar entre 7 y 300 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!guidesRegex.test(guides.value)) {
    guides.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "La medida de la guia del anjeo debe estar entre 0 y 600 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!divisorHeightRegex.test(divisorHeight.value)) {
    divisorHeight.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "La altura del divisor del anjeo debe estar entre 0 y 300 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!validateDivisorHeight(height.value, divisorHeight.value)) {
    divisorHeight.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "La altura del divisor del anjeo debe ser menor o igual a la altura del anjeo. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!notesRegex.test(notes.value)) {
    notes.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "La nota del anjeo debe estar entre 0 y 200 caracteres. Por favor, ingrese un valor válido.";
    return false;
  }

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
  const isDivisorHeightValid = validateField(divisorHeightInput, divisorHeightRegex);
  const isDivisorHeightTwoValid = validateField(divisorHeightTwoInput, divisorHeightTwoRegex);
  const areNotesValid = validateField(notesInput, notesRegex);

  return isPlaceValid && isWidthOneValid && isWidthTwoValid && isHeightValid && areGuidesValid && isDivisorHeightValid && isDivisorHeightTwoValid && areNotesValid;
}

function validateDivisorHeight(height, divisorHeight) {
  const divisorHeightRegex = /^((\d{1,2}|1\d{2}|2[0-9]{2})(\.\d)?)$|^300$/;
  const isValidDivisorHeightRegex = divisorHeightRegex.test(divisorHeight);
  const isValidHeightComparison = divisorHeight <= height;

  if (!isValidDivisorHeightRegex) {
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
const widthOneRegex = /^((7\d?|[89]|[1-9]\d|1[0-4]\d)(\.\d)?|150)$/;
const widthTwoRegex = /^(?:150(?:\.0)?|1[0-4][0-9](?:\.\d)?|[0-9]{1,2}(?:\.\d)?)$/;
const heightRegex = /^((7\d?|[89]|[1-9]\d|1\d{2}|2[0-9]{2})(\.\d)?|300)$/;
const guidesRegex = /^((\d{1,2}|[1-5]\d{2})(\.\d)?|600)$/;
const divisorHeightRegex = /^((\d{1,2}|1\d{2}|2[0-9]{2})(\.\d)?)$|^300$/;
const notesRegex = /^.{0,199}$/;

const placeInput = document.getElementById('lugar');
const widthOneInput = document.getElementById('ancho');
const widthTwoInput = document.getElementById('anchoOpcional');
const heightInput = document.getElementById('altura');
const guidesInput = document.getElementById('guia');
const divisorHeightInput = document.getElementById('alturaDivisor');
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

divisorHeightInput.addEventListener('input', function() {
    validateField(divisorHeightInput, divisorHeightRegex);
});

notesInput.addEventListener('input', function() {
    validateField(notesInput, notesRegex);
});
