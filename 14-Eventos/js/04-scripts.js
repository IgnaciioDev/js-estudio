const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('buscando..')
    console.log(e);
})


// recuerda una funcion anonima
// () => arrow function