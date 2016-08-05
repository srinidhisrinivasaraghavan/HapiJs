var Hapi = require('hapi');
var Inert = require('inert');
var BasicRoutes = require('./routes/basic-routes');
var StaticRoutes = require('./routes/static-routes');

//create server
var server = new Hapi.Server();

//connect server
server.connection({
	host:'localhost',
	port:3000
});

//Register the custom plugin
server.register([
	{
		register:BasicRoutes
	},
	{
		register:Inert
	},
	{
		register:StaticRoutes
	}
	],
	function(err){
		if(err)
		{
			throw err;
		}
		//Start the server
		server.start(function(err){
		if(err){
			throw err;
		}
		console.log('Server started at '+server.info.uri);
	});
  }
);


		