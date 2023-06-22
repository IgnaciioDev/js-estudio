
const autenticado = true;

if(autenticado) {
    console.log('El usuario esta autenticado');
}

const puntaje = 500;

if(puntaje > 300) {
    console.log('Buen puntaje');
}

// otro ejemplo mas usado

function revisarPuntaje() {
    if(puntaje > 400 ) {
        console.log('Excelente!!');
        return
    }

    if(puntaje > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisarPuntaje();