//For demo store users in object
var users = {  
  future: {
    id: '1',
    username: 'future',
    password: '$2a$04$YPy8WdAtWswed8b9MfKixebJkVUhEZxQCrExQaxzhcdR2xMmpSJiG'  // 'studio'
  }
}

var Hapi = require('hapi');
var BasicAuth = require('hapi-auth-basic');
var BcryptNode = require('bcrypt-nodejs');
var Boom = require('boom');
var AuthorizedRoutes = require('./routes/authorized-routes');
var UnauthorizedRoutes = require('./routes/unauthorized-routes');

//Create server
var server = new Hapi.Server();

//Connect server
server.connection({
	host:'localhost',
	port:3000
});

server.register([
	{
		register:BasicAuth
	},
	{
		register:UnauthorizedRoutes
	}],
	function(err){
		if(err){
			throw err;
		}

		//Validation method
		var basicValidation = function(request,username,password,callback){
			var user = users[username];
			if(!user){
				return callback(null,false);
			}
			BcryptNode.compare(password,user.password,function(err,isValid){
				callback(err,isValid,{id:user.id,name:user.name});
			});
		}
		//Auth strategy
		server.auth.strategy('simple','basic',{validateFunc: basicValidation});

		server.register(AuthorizedRoutes);

		//Start server
		server.start(function(err){
			if(err){
				throw err;
			}
			console.log('server started at: '+server.info.uri);
		})
	}
);