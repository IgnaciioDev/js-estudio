window.addEventListener('scroll', () => {
    
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();


    console.log(ubicacion);
    
    if(ubicacion < 100) {
        console.log('El elemento ya esta visible');
    }else {
        console.log('Da mas scroll');
    }
})