document.addEventListener('DOMContentLoaded', () => {
  const perfilSelect = document.getElementById('perfil');
  const aperturaSelect = document.getElementById('apertura');

  perfilSelect.addEventListener('change', updateApertureOptions);

  function updateApertureOptions() {
      const perfilSelected = perfilSelect.value;
      clearOptions(aperturaSelect);
      addDefaultOption(aperturaSelect);

      if (perfilSelected === 'Doble') {
          addOption('Lateral', 'Lateral', aperturaSelect);
          addOption('Uno hala otro', 'Uno hala otro', aperturaSelect);
      } else if (perfilSelected === 'Sencillo') {
          addOption('Fija', 'Fija', aperturaSelect);
      }
  }

  function clearOptions(selectElement) {
      selectElement.innerHTML = '';
  }

  function addDefaultOption(selectElement) {
      const optionDefault = document.createElement('option');
      optionDefault.value = '';
      optionDefault.textContent = 'Seleccionar';
      optionDefault.disabled = true;
      optionDefault.selected = true;
      selectElement.appendChild(optionDefault);
  }

  function addOption(value, text, selectElement) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = text;
      selectElement.appendChild(option);
  }
});
