var Hapi = require('hapi');
var Inert = require('inert');
var Vision = require('vision');
var Handlebars = require('handlebars');
var BasicRoutes = require('./routes/basic-routes');
var StaticRoutes = require('./routes/static-routes');
var ViewRoutes = require('./routes/view-routes');

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
	},
	{
		register:ViewRoutes
	},
	{
		register:Vision
	}
	],
	function(err){
		if(err)
		{
			throw err;
		}
		//Configure template support
		server.views({
			engines:{
				html:Handlebars
			},
			path:__dirname+'/public/views',
			layout:true //Layout.html is a common Layout page for all pages
		}, function(err){
			if(err){
				console.log('errr');
			}
		});
		//Start the server
		server.start(function(err){
		if(err){
			throw err;
		}
		console.log('Server started at '+server.info.uri);
	});
  }
);


		