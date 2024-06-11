function validateFormValues() {

  let profile = document.getElementById('perfil');
  let place = document.getElementById('lugar');
  let width = document.getElementById('ancho');
  let height = document.getElementById('altura');
  let rielLower = document.getElementById('rielInferior');
  let rielUpper = document.getElementById('rielSuperior');
  let topProfile = document.getElementById('perfilSuperior');
  let divisorHeight = document.getElementById('alturaDivisor');
  let notes = document.getElementById('notas');

  if (topProfile.value === "") {
    topProfile.value = "0";
  }

  if (divisorHeight.value === "") {
    divisorHeight.value = "0";
  }

  if (!placeRegex.test(place.value)) {
    place.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "El lugar de instalación del anjeo debe estar entre 2 y 15 caracteres. Por favor, ingrese un valor válido.";
    return false;
  }

  if(profile.value === 'Cuatro naves') {
    if (!widthFourShipsRegex.test(width.value)) {
      width.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
      document.getElementById('errorContainer').style.display = 'flex';
      document.getElementById("wrongData").textContent = "El ancho del anjeo debe estar entre 20 y 800 centímetros. Por favor, ingrese un valor válido.";
      return false;
    }
  } else if (profile.value === 'Doble') {
    if (!widthDobleRegex.test(width.value)) {
      width.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
      document.getElementById('errorContainer').style.display = 'flex';
      document.getElementById("wrongData").textContent = "El ancho del anjeo debe estar entre 20 y 400 centímetros. Por favor, ingrese un valor válido.";
      return false;
    }
  } else if (profile.value === 'Sencillo') {
    if (!widthSimpleRegex.test(width.value)) {
      width.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
      document.getElementById('errorContainer').style.display = 'flex';
      document.getElementById("wrongData").textContent = "El ancho del anjeo debe estar entre 20 y 210 centímetros. Por favor, ingrese un valor válido.";
      return false;
    }
  } else if (profile.value === 'Tres naves') {
    if (!widthThreeShipsRegex.test(width.value)) {
      width.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
      document.getElementById('errorContainer').style.display = 'flex';
      document.getElementById("wrongData").textContent = "El ancho del anjeo debe estar entre 20 y 600 centímetros. Por favor, ingrese un valor válido.";
      return false;
    }
  } else {
    if(parseFloat(width.value) > 800) {
      width.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
      document.getElementById('errorContainer').style.display = 'flex';
      document.getElementById("wrongData").textContent = "El ancho del anjeo debe estar entre 20 y 800 centímetros. Por favor, ingrese un valor válido.";
      return false;
    }
  }

  if (!heightRegex.test(height.value)) {
    height.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "El alto del anjeo debe estar entre 140 y 350 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!rielLowerRegex.test(rielLower.value)) {
    rielLower.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "La medida del riel inferior debe estar entre 10 y 1200 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!rielUpperRegex.test(rielUpper.value)) {
    rielUpper.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "La medida del riel superior debe estar entre 10 y 1200 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!topProfileRegex.test(topProfile.value)) {
    topProfile.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "La medida del perfil superior debe estar entre 0 y 1000 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!divisorHeightRegex.test(divisorHeight.value)) {
    divisorHeight.style.boxShadow = '0px 5px 5px rgba(194, 18, 18, 0.6)';
    document.getElementById('errorContainer').style.display = 'flex';
    document.getElementById("wrongData").textContent = "La altura del divisor del anjeo debe estar entre 0 y 350 centímetros. Por favor, ingrese un valor válido.";
    return false;
  }

  if (!(parseFloat(divisorHeight.value) <= (parseFloat(height.value)))) {
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
  const isRielLowerValid = validateField(rielLowerInput, rielLowerRegex);
  const isRielUpperValid = validateField(rielUpperInput, rielUpperRegex);
  const isTopProfileValid = validateField(topProfileInput, topProfileRegex);
  const isDivisorHeightValid = validateField(divisorHeightInput, divisorHeightRegex);
  const areNotesValid = validateField(notesInput, notesRegex);

  return isPlaceValid && isWidthValid && isHeightValid && isRielLowerValid && isRielUpperValid && isTopProfileValid && isDivisorHeightValid && areNotesValid;
}

const placeRegex = /^.{2,15}$/;
const widthFourShipsRegex = /^(20|2[1-9]|[3-9][0-9]|[1-7][0-9]{2}|800)(\.\d)?$/;
const widthThreeShipsRegex = /^(20|2[1-9]|[3-9][0-9]|[1-5][0-9]{2})(\.[0-9])?$|^600$/;
const widthDobleRegex = /^(20|2[1-9]|[3-9][0-9]|[1-3][0-9]{2})(\.\d)?$|^400$/;
const widthSimpleRegex = /^(20|2[1-9]|[3-9][0-9]|1[0-9]{2}|20[0-9])(\.\d)?$|^210$/;
const heightRegex = /^(140|1[4-9]\d|2[0-9]\d|300|31[0-9]|32[0-9]|33[0-9]|34[0-9]|349)(\.\d)?$|^350$/;
const rielLowerRegex = /^(10|[1-9]\d{1,2}|1[01]\d{2})(\.\d)?$|^1200$/;
const rielUpperRegex = /^(10|[1-9]\d{1,2}|1[01]\d{2})(\.\d)?$|^1200$/;
const topProfileRegex = /^(0|[1-9]\d{0,2})(\.\d)?$|^1000$/;
const divisorHeightRegex = /^((\d{1,2}|1\d{2}|2[0-9]{2}|3[0-4][0-9])(\.\d)?)$|^350$/;
const notesRegex = /^.{0,199}$/;

const placeInput = document.getElementById('lugar');
const widthInput = document.getElementById('ancho');
const heightInput = document.getElementById('altura');
const rielLowerInput = document.getElementById('rielInferior');
const rielUpperInput = document.getElementById('rielSuperior');
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

rielLowerInput.addEventListener('input', function() {
    validateField(rielLowerInput, rielLowerRegex);
});

rielUpperInput.addEventListener('input', function() {
  validateField(rielUpperInput, rielUpperRegex);
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
