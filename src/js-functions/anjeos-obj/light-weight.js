const userInputs = require('./user-inputs.js');

const lightWeight = {
    ticketId : userInputs.ticketIdInput,
    color : ['Analog', 'Blanco', 'Champaña', 'Natural', 'Negro'],
    profileType : ['Doble', 'Sencillo'],
    opening : ['Una hala otra', 'Lateral'],
    place : userInputs.placeInput,
    width : userInputs.widthInput,
    height : userInputs.heightInput,
    guides : userInputs.guidesInput,
    instalation : ['Externa', 'Interna'],
    divisorHigh : userInputs.divisorInput,
    angle : ['Inferior','Lateral', 'Sin angulo'],
    note : userInputs.noteInput,
};

console.log("El número de pedido es:",lightweight.ticketId);
console.log("El color del anjeo liviano es:",lightweight.color);
console.log("El perfil del anjeo liviano es:",lightweight.profileType);
console.log("La apertura del anjeo liviano es:",lightweight.opening);
console.log("El lugar de instalación del anjeo liviano es:",lightweight.place);
console.log("La anchura del anjeo liviano es:",lightweight.width);
console.log("La altura del anjeo liviano es:",lightweight.height);
console.log("La cantidad de guias del anjeo liviano son:",lightweight.guides);
console.log("El tipo de instlación del anjeo liviano es:",lightweight.instalation);
console.log("La altura del divisor es:",lightweight.divisorHigh);
console.log("El ángulo es:",lightweight.angle);
console.log("Los comentarios del clientes son los siguientes:",lightweight.note);

module.exports = lightWeight;