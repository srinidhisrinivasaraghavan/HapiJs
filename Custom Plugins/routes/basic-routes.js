//plugins have register methids that return a function(server,options,next)
var basicRoutes = {
	register:function(server,options,next){
		server.route([ 
		{	//Simple Get
			method:'GET',
			path:'/',
			handler:function(request,reply){
				reply("Hello from Hapi");
			},
			config:{ // Below params used for documentation
				description:'Sends a Hello',
				notes:'Get method',
				tags:['Hello']
			}
		},
		{  //Multiple params: Get a page, the tag parameter is optional, only last parameter can be optional
			method:'GET',
			path:'/page/{page}/{tag?}',
			handler:function(request,reply){
				reply("Hello from Hapi page "+encodeURIComponent(request.params.page)+" tag "+encodeURIComponent(request.params.tag));
			}
		},
		{  //POST
			method:'POST',
			path:'/',
			handler:function(request,reply){
				reply("Created a new Instance");
			}
		},
		{
			method:'GET',
			path:'/hello',
			handler:function(request,reply){
				reply.file('./public/hello.html');
			}
		}
	]);
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