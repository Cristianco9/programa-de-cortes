const userInputs = require('./user-inputs.js');

const heavyWeight = {
    ticketId : userInputs.ticketIdInput,
    color : ['Analog', 'Blanco', 'Champaña', 'Natural', 'Negro'],
    profileType : ['Cuatro naves', 'Doble', 'Sencillo','Tres naves'],
    opening : ['Una hala otra', 'Lateral'],
    place : userInputs.placeInput,
    width : userInputs.widthInput,
    height : userInputs.heightInput,
    head : userInputs.headInput,
    adaptador : userInputs.adaptadorInput,
    topProfile : userInputs.topProfileInput,
    instalation : ['Externa', 'Interna'],
    divisorHigh : userInputs.divisorInput,
    typeHandle : ['Cubeta anjeo','Manija ducha'],
    openDirection : ['Derecha', 'Izquierda'],
    note : userInputs.noteInput,
};

console.log("El número de pedido es:", heavyWeight.ticketId);
console.log("El color del anjeo pesado es:", heavyWeight.color);
console.log("El perfil del anjeo pesado es:",heavyWeight.profileType);
console.log("La apertura del anjeo pesado es:",heavyWeight.opening);
console.log("El lugar de instalación del anjeo pesado es:",heavyWeight.place);
console.log("La anchura del anjeo pesado es:",heavyWeight.width);
console.log("La altura del anjeo pesado es:",heavyWeight.height);
console.log("El cabezal del anjeo pesado es:",heavyWeight.head);
console.log("El adaptador del anjeo pesado es:", heavyWeight.adaptador);
console.log("El perfil superior del anjeo pesado es:",heavyWeight.topPrifile);
console.log("El tipo de instlación del anjeo pesado es:",heavyWeight.instalation);
console.log("La altura del divisor es:",heavyWeight.divisorHigh);
console.log("El tipo de manija del anjeo pesado es:",heavyWeight.typeHandle);
console.log("El lado de apertura del anjeo pesado es:",heavyWeight.openDirection);
console.log("Los comentarios del clientes son los siguientes:",heavyWeight.note);

module.exports = heavyWeight;