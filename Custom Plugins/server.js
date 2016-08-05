var Hapi = require('hapi');
var BasicRoutes = require('./routes/basic-routes');

//create server
var server = new Hapi.Server();

//connect server
server.connection({
	host:'localhost',
	port:3000
});

//Register the custom plugin
server.register({
	register:BasicRoutes
});

//Start the server
server.start(function(err){
	if(err){
		throw err;
	}
	console.log('Server started at '+server.info.uri);
});