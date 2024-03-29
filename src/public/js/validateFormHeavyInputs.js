document.addEventListener('DOMContentLoaded', () => {
  const perfilSelect = document.getElementById('perfil');
  const aperturaSelect = document.getElementById('apertura');
  const manijaSelect = document.getElementById('manija');
  const ladoSelect = document.getElementById('lado');

  perfilSelect.addEventListener('change', updateApertureOptions);
  manijaSelect.addEventListener('change', updateSideOptions);

  function updateApertureOptions() {
      const perfilSelected = perfilSelect.value;
      clearOptions(aperturaSelect);
      addDefaultOption(aperturaSelect);

      if (perfilSelected === 'Cuatro naves') {
          addOption('Lateral', 'Lateral', aperturaSelect);
          addOption('Uno hala otro', 'Uno hala otro', aperturaSelect);
      } else if (perfilSelected === 'Doble') {
          addOption('Lateral', 'Lateral', aperturaSelect);
          addOption('Uno hala otro', 'Uno hala otro', aperturaSelect);
      } else if (perfilSelected === 'Sencillo') {
          addOption('Fijo', 'Fijo', aperturaSelect);
      } else if (perfilSelected === 'Tres naves') {
          addOption('Lateral', 'Lateral', aperturaSelect);
          addOption('Uno hala otro', 'Uno hala otro', aperturaSelect);
      }
  }

  function updateSideOptions() {
      const manijaSelected = manijaSelect.value;
      clearOptions(ladoSelect);
      addDefaultOption(ladoSelect);

      if (manijaSelected === 'Ducha') {
          addOption('Fija', 'Fija', ladoSelect);
      } else if (manijaSelected === 'Cubeta anjeo') {
          addOption('Derecha', 'Derecha', ladoSelect);
          addOption('Izquierda', 'Izquierda', ladoSelect);
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
