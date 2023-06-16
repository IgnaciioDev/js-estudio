// const nombre = "Monitor 20 Pulgadas";
// const precio = 300;
// const disponible = true;

// Un objeto agrupa todo en una sola variable...


//Object literal {}
// const producto = {
//     nombre: "Monitor 20 Pulgadas",
//     precio: 300,
//     disponible: true,
//     informacion: {
//         medida: {
//             peso: '1kg',
//             medida: '1m',
//         },
//         fabricacion:  {
//             pais: 'China',
//         }
//     }
// }

"use strict";

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

const medida = {
    peso: '1kg',
    medida: '1m',
}

console.log(producto)
console.log(medida)

// copiar 2 objetos
const resultado = Object.assign(producto, medida);

// Spread Operator o rest operator

const resultado2 = {...producto, ...medida};
console.log(resultado);
console.log(resultado2);






// Object.seal(producto);
// producto.disponible = false;
// // producto.imagen = 'imagen.jgp';

// console.log(producto);

// console.log(Object.isSealed(producto));




// const {nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;
// console.log(nombre);
// console.log(informacion);
// console.log(fabricacion);
// console.log(pais);

// Agregar nuevas propiedades al objeto

// producto.imagen = "imagen.jpg";

// Eliminar propiedas del objeto
// delete producto.disponible;

// Object destructuring, Extraer del objeto

// console.log(producto)

// Esto es destructuring No te olvides
// const { nombre, precio, disponible } = producto;
// console.log(nombre);
// console.log(precio);
// console.log(disponible);