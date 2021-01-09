const { io } = require('../server');


io.on('connection', (client) => {
  console.log('usuario Conectado');

  client.emit('enviarMensaje', {
      usuario: 'admin',
      mensaje: 'bienvenido a esta applicacion'
  });

  client.on('disconnect', () => {
      console.log('usuario desconectado');
  })

  // escuchar al cliente
  client.on('enviarMensaje', (data, callback) => {
      console.log(data);

      client.broadcast.emit('enviarMensaje', data);
      // if (mensaje.usuario) {
      //     callback({resp: 'TODO Bien'});
      // } else {
      //     callback({resp: 'noooooo todo mal'});
      // }
      
  })
});