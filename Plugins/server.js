var Hapi = require('hapi');
var Good = require('good');
var GoodConsole = require('good-console');

//Create server
var server = new Hapi.Server();

//Provide Connection Details
server.connection({
	host: 'localhost',
	port: 3000
});

//registering a single Plugin to server instance, can add multiple plugins in the array
server.register([{
    register: Good,
    options: {
    	ops: false,
        reporters: {
            console: [{
                module: 'good-console'
            }, 'stdout']
        }
    }
}],
function(err) {
	if (err) {
        throw err; // something bad happened loading the plugin
    }
});

//Start a server
server.start(function(err){

    if (err) {
        throw err;
    }
    server.log('Server running at:', server.info.uri);
});


