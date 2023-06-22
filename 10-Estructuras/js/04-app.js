
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

// Operador or || 
if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Si podemos pagar');
}else {
    console.log('Fondos insuficentes');
}