var exp=require('express');
var app=exp();

     app.use(exp.static('images'));
     //app.use(exp.static('styles'));
     //app.ude(exp.static('scripts'));
     app.use(function(req,res,next){
        
		var d=new Date();
		console.log("Request received at : "+ d.toString()+" for "+req.path);
		next();
		});
		
     app.get('/login',function(req,res){
         res.send("<img src='flo.jpg'  width='200' height='200'/>");
		});
	 
     app.listen(8300,function(){
          console.log("Server started at port no 8300.......");
	 });
		 
		