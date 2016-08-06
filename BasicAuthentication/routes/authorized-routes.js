var AuthorizedRoutes ={
	register :function(server,options,next){
		server.route([
			{
				method:'GET',
				path:'/home',
				config:{
					auth:'simple',
					handler:function(request,reply){
						reply('Only visible for authorized users');
					}
				}
			}
			]);
		next();
	}
}

AuthorizedRoutes.register.attributes ={
	name:'authorized-routes',
	version:'1.0.0'
}

module.exports = AuthorizedRoutes;