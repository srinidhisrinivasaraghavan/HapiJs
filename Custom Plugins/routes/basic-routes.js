//plugins have register methids that return a function(server,options,next)
var basicRoutes = {
	register:function(server,options,next){
		server.route({
			method:'GET',
			path:'/',
			handler:function(request,reply){
				console.log('Handler reached');
				reply("Hello from Hapi");
			}
		});
		next();
	}
}
//register object has attributes which has the metadata
basicRoutes.register.attributes={
	name:'basic-routes',
	version:'1.0.0'
}
//need to export to use in other files
module.exports = basicRoutes;