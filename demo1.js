var express=require('express');
var app=express();
app.listen(5000,function(req,res){

console.log('Node Server is running..........');
});

app.get('/welcome',function(req,res){
	 res.send("<h1> WELCOME  "+req.query.nm+"</h1>");
});

app.get('/products/:id',function(req,res){
	res.send("Info about product id : "+req.params.id);
});

app.get('/products/:id/:qty',function(req,res){
	res.send("product id"+req.params.id+"is added in cart for "+req.params.qty);
});