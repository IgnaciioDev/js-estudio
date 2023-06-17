const numero1 = 20;
const numero2 = "20";

// para darte una idea para diferenciar
// Function con ()
// Metodo con .
console.log(parseInt(numero2)); // Esto es una funcion

console.log( numero1.toString()); // Esto es un metodo


function sumar(a, b) { // a y b son parametros
    console.log( a + b );
}

sumar(2, 3);  // 2 y 3 son argumentos

function saludar(nombre, apellido = 'No tiene apellido') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('ignacio', 'Estay');
saludar('ignacio');