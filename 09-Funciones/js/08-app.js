const carrito = [
    {nombre: 'Montior 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Celular', precio: 700},
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);


const nuevoArreglo2 = carrito.forEach(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}` ;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);