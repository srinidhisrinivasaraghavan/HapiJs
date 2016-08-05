'use strict';

const Hapi = require('hapi');
const Good = require('good');

//Create a server and connect to a port
const server = new Hapi.Server();

//Add server connection information
server.connection({ 
    host: 'localhost',
    port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }
//Serving static files
    server.route({
        method: 'GET',
        path: '/hello',
        handler: function (request, reply) {
            reply.file('./public/hello.html');
        }
    });
});


server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }


//Start a server
server.start((err) => {

    if (err) {
        throw err;
    }
    server.log('Server running at:', server.info.uri);
});
});