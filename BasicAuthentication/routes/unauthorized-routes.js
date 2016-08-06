var Boom        = require('boom');
var bcrypt      = require('bcrypt-nodejs');

var UnauthorizedRoutes = {
	register:function(server,options,next){
		server.route([
		{
			method:'POST',
			path:'/register',
			handler:function(request,reply){
				//TODO
				console.log(request.payload.email);
			}
		}

	]);
	next();
	}
}

UnauthorizedRoutes.register.attributes={
	name:'unauthorized-routes',
	version:'1.0.0'
}

module.exports = UnauthorizedRoutes;