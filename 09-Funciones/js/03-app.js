iniciarApp();

// Esto llama la primera function al terminar se ejecuta la segunda
function iniciarApp() {
    console.log('Iniciando app...');
    
    segundaFunction();
}


function segundaFunction() {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}

