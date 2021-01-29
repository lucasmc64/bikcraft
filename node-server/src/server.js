const express = require('express'); // Importa o Express

const routes = require('./routes');

const server = express(); // usa o Express para montar o servidor

server.use(express.urlencoded({ extended: true }));
server.use(function (request, response, next) {
    // Website que desejamos conectar
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    // Request métodos que vamos permitir
    response.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers que vamos permitir
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    next();
});
server.use(routes);

server.listen('8935', function() {
    console.log('Server is running!')
});