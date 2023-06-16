// Arrays o Arreglos

// const numeros = [10, 20, 30];

// const meses = new Array('Enero', 'Febrero', 'Marzo');

// console.log(numeros);
// console.log(meses);

// Un arreglo que contine datos de todo tipo

// const deTodo = ["hola", 10, true, "si", null, {nombre: 'Ignacio', trabajo: 'programador'}, [1,2,3]];
// console.log(deTodo);


// const numero = [10,20,30,40,50];

// console.log(numero)
// console.table(numero);


// // Acceder al arreglo
// console.log(numero[2]);
// console.log(numero[0]);

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// console.table(meses);

// Cuanto mide el arreglo
// Recuerda que length es para medir
// console.log(meses.length);

// Para recorrer este arreglo se utiliza un iterador
// Esto es un for loop, es una funcion que tiene 3 partes, 1 el valor, 2 cuanta veces quieres que se ejecute,
// para incremente 1 a 1 se utiliza i++
// for(let i = 0; i < meses.length; i++) {
//     console.log(meses [i] );
// }

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// meses [0] = "Nuevos Mes";
// meses [7] = "ultimo mes";
// console.table(meses);

// Pregunta del trabajo en que valores declara en const se puede modificar los valores
// en arreglo y objetos

// const meses = ['Enero', 'Febrero', 'Marzo'];

// meses [3] = "Abril";

// Agregar al final del arreglo sin saber la posicion de un arreglo

// meses.push('mayo');


// const carrito = [];

// // Definir un producto

// const producto = {
//     nombre: 'Monitor 32 pulgadas',
//     precio: 400
// }

// const producto2 = {
//     nombre: 'Celular',
//     precio: 800
// }

// const producto3 = {
//     nombre: 'Teclado',
//     precio: 50
// }
// const producto4 = {
//     nombre: 'Tecla',
//     precio: 30
// }

// carrito.push(producto2);
// carrito.push(producto);
// carrito.push(producto4);
// console.log(carrito);

// let resultado;
// Spread operator ... esta es una forma declarativa
// imperativa va a modificar el objeto actual y declarativa no
// resultado = [...carrito, producto];

// console.log(resultado);


// eliminar ultimo elemento de un arreglo

// carrito.pop();


// const producto = {
//     nombre: 'monitor 20 pulgadas',
//     precio: 300,
//     disponible: true
// }

// const { nombre } = producto;
// console.log(nombre);

// // Destructurin con arreglo

// const numero = [10, 20, 30, 40, 50, 60];

// aqui le puede poner nombre
// const [primero, segundo, tercero] = numero;
// const [ , , tercero, ...cuarto] = numero;
// console.log(cuarto);

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'teclado', precio: 200},
    {nombre: 'mouse', precio: 600},
    {nombre: 'microfono', precio: 800},
    {nombre: 'fuente', precio: 100},
]

// ESTAMOS ITERANDO

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito [i].nombre );
}

// recuerdad esto es un metodo .
carrito.forEach( function(producto) {

})

// esto es una funcion
// hola();