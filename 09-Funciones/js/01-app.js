// Declaracion de funcion ( Function Declaration)

sumar();
function sumar() {
    console.log( 2 + 2);
}



// Expresion de funcion (Function Expression);
sumar2()
const sumar2 = function() {
    console.log( 3 + 3 );
}


// La diferencia entre una la otra es que la primera funcion que es declarativa
// puede ejecutarse por el hosting recuerda que el hosting la primera etapa de creacion
// y la segunda de ejecucion,

// asi se veria en tema de ejecucion de function expression

// const sumar2; 
// sumar();