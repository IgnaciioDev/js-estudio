// cuanto la propiedad reproducir tiene una funcion se le conocen como
// metodo de propiedad.
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando una playlist de ${nombre}`)
    },
    reproducirPlaylist: function(musica) {
        console.log(`Reproduciendo una playlist de ${musica}`)
    }
}

// Recuerda que siempre tiene la sintaxi de punto con hay objetos.

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('michael jackson');
reproductor.reproducirPlaylist('Album michael jackson');

// recuerda que tambien puede modificar o agregar mas objetos

// reproductor.borrar = function(id) {
//     console.log(`Borrando cancion... ${id}`)
// }

// reproductor.borrar(30);