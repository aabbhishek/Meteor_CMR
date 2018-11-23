Router.configure({
	layoutTemplate:"main_layout"
});

Router.map(function() {
	// body...
	this.route('login_lay',{
				path:'/',
				template:'login_lay'
	});

	this.route('custm',{
				path:'/',
				template:'custm'
	});
});