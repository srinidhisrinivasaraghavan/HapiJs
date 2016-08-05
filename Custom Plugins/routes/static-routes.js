var StaticRoutes ={
	register:function(server,options,next){
		server.route([
		{
			method:'GET',
			path:'/css/{files*}',
			handler:{
				directory:{
					path:'./public/css'
				}
			}
		}
		]);
		next();
	}
}
//register object has attributes which has the metadata
StaticRoutes.register.attributes={
	name:'static-routes',
	version:'1.0.0'
}
//need to export to use in other files
module.exports = StaticRoutes;