document.addEventListener('DOMContentLoaded', () => {
  const profileSelect = document.getElementById('perfil');
  const openingSelect = document.getElementById('apertura');
  const handleSelect = document.getElementById('manija');
  const sideSelect = document.getElementById('lado');

  profileSelect.addEventListener('change', updateApertureOptions);
  handleSelect.addEventListener('change', updateSideOptions);

  function updateApertureOptions() {
      const profileSelected = profileSelect.value;
      clearOptions(openingSelect);
      addDefaultOption(openingSelect);

      if (profileSelected === 'Cuatro naves') {
          addOption('Cierre al centro', 'Cierre al centro', openingSelect);
          addOption('Lateral', 'Lateral', openingSelect);
          addOption('Uno hala otro', 'Uno hala otro', openingSelect);
      } else if (profileSelected === 'Doble') {
          addOption('Cierre al centro', 'Cierre al centro', openingSelect);
          addOption('Lateral', 'Lateral', openingSelect);
          addOption('Uno hala otro', 'Uno hala otro', openingSelect);
      } else if (profileSelected === 'Sencillo') {
          addOption('Fijo', 'Fijo', openingSelect);
      } else if (profileSelected === 'Tres naves') {
          addOption('Cierre al centro', 'Cierre al centro', openingSelect);
          addOption('Lateral', 'Lateral', openingSelect);
          addOption('Uno hala otro', 'Uno hala otro', openingSelect);
      }
  }

  function updateSideOptions() {
      const handleSelected = handleSelect.value;
      clearOptions(sideSelect);
      addDefaultOption(sideSelect);

      if (handleSelected === 'Ducha') {
          addOption('Fijo', 'Fijo', sideSelect);
      } else if (handleSelected === 'Cubeta anjeo') {
          addOption('Derecha', 'Derecha', sideSelect);
          addOption('Izquierda', 'Izquierda', sideSelect);
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
