
const usuario = true;
const puedePagar = false;

// el operador (Y) o and && revisa que si se cumple las dos condiciones
if(usuario && puedePagar) {
    console.log('Si puedes comprar');

} else if(!usuario) {
    console.log('Inicia seasion o saca una cuenta');

} else if(!puedePagar) {
    console.log('Fondos insuficientes');
} else {
    console.log('No no puedes comprar');
}