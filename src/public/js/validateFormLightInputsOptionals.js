/*document.addEventListener('DOMContentLoaded', () => {
  const perfilSelect = document.getElementById('perfil');
  const aperturaSelect = document.getElementById('apertura');

  // Agregar el evento change tanto para el perfil como para la apertura
  perfilSelect.addEventListener('change', updateOptionalInputs);
  aperturaSelect.addEventListener('change', updateOptionalInputs);

  function updateOptionalInputs() {
    const perfilSelected = perfilSelect.value;
    const aperturaSelected = aperturaSelect.value;
    const fieldContainerOptional1 = document.getElementById('fieldContainerOptional-1');
    const fieldContainerOptional2 = document.getElementById('fieldContainerOptional-2');
    const fieldContainerGuide = document.getElementById('fieldContainerGuide');
    const fieldContainerHidden = document.getElementById('fieldContainerHidden');
    const fieldName1 = document.getElementById('fieldName-1');


    // Verificar si perfilSelected es 'Doble' y aperturaSelected es 'Lateral'
    if (perfilSelected === 'Sencillo') {
      fieldContainerGuide.style.display = 'none';
      fieldContainerOptional2.style.display = 'flex';
      fieldContainerHidden.style.display = 'flex';
    } if (perfilSelected === 'Sencillo' && aperturaSelected === 'Fijo') {
      fieldContainerGuide.style.display = 'none';
      fieldContainerOptional2.style.display = 'flex';
      fieldContainerHidden.style.display = 'flex';
    } else if (perfilSelected === 'Doble') {
      fieldContainerGuide.style.display = 'flex';
      fieldContainerOptional2.style.display = 'none';
      fieldContainerHidden.style.display = 'flex';
    } else if (perfilSelected === 'Doble' && aperturaSelected === 'Lateral') {
      fieldContainerHidden.style.display = 'none';
      fieldContainerOptional1.style.display = 'flex';
      fieldName1.textContent = 'Ancho 1';
    } else {
      fieldContainerGuide.style.display = 'flex';
      fieldContainerOptional2.style.display = 'none';

    }

  }
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const perfilSelect = document.getElementById('perfil');
  const aperturaSelect = document.getElementById('apertura');

  // Configuración para cada tipo de perfil y apertura
  const perfilConfig = {

    'Sencillo': {

      'Fijo': {
        guide: false,
        optional2: true,
        hidden: true,
      },
      'Fijo QP': {
        guide: true,
        optional2: false,
        hidden: true,
      },
      '': {
        guide: true,
        optional2: false,
        hidden: true,
      },
      // Agrega más configuraciones aquí si es necesario para 'Sencillo' y otras aperturas
    },
    'Doble': {

      'Cierre al centro': {
        guide: true,
        optional1: false,
        hidden: true,
      },
      'Lateral': {
        guide: true,
        optional1: true,
        hidden: false,
        fieldName: 'Ancho 1',
      },
      'Tres naves': {
        guide: true,
        optional1: false,
        hidden: true,
      },
      'Uno hala otro': {
        guide: true,
        optional1: false,
        hidden: true,
      },
      '': {
        guide: true,
        optional1: false,
        hidden: true,
      },
      // Agrega más configuraciones aquí si es necesario para 'Doble' y otras aperturas
    },
    '':{
      guide: true,
      optional2: false,
      hidden: true,
    }
    // Agrega más configuraciones aquí si es necesario para otros perfiles
  };

  // Agregar el evento change tanto para el perfil como para la apertura
  perfilSelect.addEventListener('change', updateOptionalInputs);
  aperturaSelect.addEventListener('change', updateOptionalInputs);

  function updateOptionalInputs() {
    const perfilSelected = perfilSelect.value;
    const aperturaSelected = aperturaSelect.value;
    const fieldContainerOptional1 = document.getElementById('fieldContainerOptional-1');
    const fieldContainerOptional2 = document.getElementById('fieldContainerOptional-2');
    const fieldContainerGuide = document.getElementById('fieldContainerGuide');
    const fieldContainerHidden = document.getElementById('fieldContainerHidden');
    const fieldName1 = document.getElementById('fieldName-1');

    const config = perfilConfig[perfilSelected][aperturaSelected];

    fieldContainerGuide.style.display = config.guide ? 'flex' : 'none';
    fieldContainerOptional1.style.display = config.optional1 ? 'flex' : 'none';
    fieldContainerOptional2.style.display = config.optional2 ? 'flex' : 'none';
    fieldContainerHidden.style.display = config.hidden ? 'flex' : 'none';
    fieldName1.textContent = config.fieldName ? config.fieldName : 'Ancho';
  }
});
