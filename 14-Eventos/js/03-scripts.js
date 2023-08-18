const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('fallo la validacion');
    }
})

// keydown - presiona una tecla
// keyup - cuando suelta una tecla
// blur - entrar y salir input de ahi se ejecuta la funcion
// copy - para copiar
// paste - pegar
// cut - cortar
// input - hace todo menos el blur


// Evento que esta sucediendo "e, evt, event"

// e.type o type esto te va decir que elemento estamos


// e.target esto no va decir que input especifico sobre el
// cual estamos escribiendo.

// e.target.value es para ver lo que el usuario esta escribiendo


// EVENTO SOBRE EL INPUT