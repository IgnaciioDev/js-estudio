// Ejecutar el codigo fase a una condicion

const puntaje = 1000;
const totalAPagar = 500;
const tarjeta = true;
const dinero = 300;

// () condicion, == comparar, === comparador estricto, != diferente,
// if(puntaje != 1000 ) {
//     console.log('Si es diferente');
// }

if(puntaje === '1000' ) {
    console.log('Si es igual');
}else {
    console.log('No es igual');
}

if(puntaje !== '1000' ) {
    console.log('Si es diferente');
}else {
    console.log('No es diferente');
}


if(dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if(tarjeta) {
    console.log('Si puedo pagar porque tengo la tarjeta');
}else {
    console.log('Fondos Insuficientes');
}
