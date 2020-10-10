//All the require
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//Server at port 3000
server.listen(3000);

//routes
app.use(express.static('public'));

//Socket
const socketIo = require('socket.io');
const io = socketIo.listen(server);

io.on('connect', function(socket){
    console.log('New Connection at: ' + socket.id);

    socket.on('datos_usuario', function(datos){
        console.log('Correo: ' +datos.correo + ' Usuario: ' + datos.usuario);
        io.emit('nuevo_usuario', {user: datos.usuario});
    });
});