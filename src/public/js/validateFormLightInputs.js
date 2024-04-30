document.addEventListener('DOMContentLoaded', () => {
  const profileSelect = document.getElementById('perfil');
  const openingSelect = document.getElementById('apertura');
  const angleSelect = document.getElementById('angulo');


  profileSelect.addEventListener('change', updateApertureOptions);
  openingSelect.addEventListener('change', updateAngleOptions);

  function updateApertureOptions() {
      const profileSelected = profileSelect.value;
      clearOptions(openingSelect);
      addDefaultOption(openingSelect);

      if (profileSelected === 'Doble') {
          addOption('Cierre al centro', 'Cierre al centro', openingSelect);
          addOption('Lateral', 'Lateral', openingSelect);
          addOption('Tres naves', 'Tres naves', openingSelect);
          addOption('Uno hala otro', 'Uno hala otro', openingSelect);
      } else if (profileSelected === 'Sencillo') {
          addOption('Fijo', 'Fijo', openingSelect);
          addOption('Fijo QP', 'Fijo QP', openingSelect);
      }

      updateAngleOptions();
  }

  function updateAngleOptions() {
      const openingSelected = openingSelect.value;
      const profileSelected = profileSelect.value;

      clearOptions(angleSelect);
      addDefaultOption(angleSelect);

      if (profileSelected === 'Sencillo' && openingSelected === 'Fijo QP') {
          addOption('Lateral', 'Lateral', angleSelect);
          addOption('Sin angulo', 'Sin angulo', angleSelect);
      } else {
          addOption('Inferior', 'Inferior', angleSelect);
          addOption('Inferior y lateral', 'Inferior y lateral', angleSelect);
          addOption('Lateral', 'Lateral', angleSelect);
          addOption('Sin angulo', 'Sin angulo', angleSelect);
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
