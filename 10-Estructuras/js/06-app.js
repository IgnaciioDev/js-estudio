// Operador ternario

const autenticado = true;
const puedePagar = true;

// if = ? else = :
console.log(autenticado && puedePagar ? 'Si esta autenticado ': 'No esta autenticado');

// ternario anidados

console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede' : 'Si autenciado, no puede pagar' : 'No no esta autenticado');