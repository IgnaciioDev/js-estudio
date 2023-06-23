// Como detectar que un elemento en forloop llego al cierto numero
// Y para detenerlo se hace un un Break
// Y para continuar con continue; recuerda que esto no detiene el forloop
// for(let i = 0; i <= 10; i++) {
//     if(i === 5) {
//         console.log('Este es el 5');
//         break;
//     }
//     console.log(`Numero: ${i}`);
// }


const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'teclado', precio: 200},
    {nombre: 'mouse', precio: 600, descuento: true},
    {nombre: 'microfono', precio: 800},
    {nombre: 'fuente', precio: 100},
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}