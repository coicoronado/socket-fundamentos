var socket = io();
// escuchar evento
socket.on('connect', function() {
    console.log('connectado al servidor');
});

// emitir evento
socket.emit('enviarMensaje', {
    usuario: 'ian',
    mensaje: 'hola mundo'
}, function (resp) {
    console.log('respuesta del server', resp);
});

// escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
})

socket.on('disconnect', function () {
    console.log('perdimos coneccion con el servidor');
})