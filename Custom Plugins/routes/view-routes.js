var ViewRoutes = {
	register : function(server,options,next){
		server.route({ //Get html files using views, handle bars
			method:'GET',
			path:'/home',
			handler:function(request,reply){
				console.log('In Home handler');
				var data = {message:"Hello From home", topic:"Views"};
				reply.view('home',data);
			}
		}
		);
		next();
	}
}
//register object has attributes which has the metadata
ViewRoutes.register.attributes={
	name:'view-routes',
	version:'1.0.0'
}
//need to export to use in other files
module.exports=ViewRoutes;