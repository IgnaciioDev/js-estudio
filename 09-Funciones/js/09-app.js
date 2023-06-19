const reproductor = {
    cancion: '',
    reproducor: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion) { // Set es para agregar valores
        this.cancion = cancion; // this es para que lo busque dentro del objeto
        console.log(`Agregando ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.reproducor(30);
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

console.log(reproductor);