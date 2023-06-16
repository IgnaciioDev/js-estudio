// Object literal
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

// Retorna llaves
// console.log(Object.keys(producto)); // Object.keys no va retornar un arreglo (arrays)

// retorna valores
console.log(Object.values(producto)) // esto solo te mustra los valores al contrario del Object.keys


// retorna todo
console.log(Object.entries(producto));




// Object Constructor

// function Producto(nombre, precio) {
//     this.nombre = nombre; // Recuerda que this permite que no se mezcle los valores
//     this.precio = precio;
//     this.disponible = true;
// }

// const producto2 =  new Producto('Monitor 24 Pulgadas', 500);
// console.log(producto2);

// const producto3 = new Producto('Montior 4k', 100);
// console.log(producto3)