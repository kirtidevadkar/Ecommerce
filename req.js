var http=require('http');
var mymod=require('./mymodule');

  http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        console.log("5 is prime : "+mymod.isPrime(5));
        console.log("28 is perfect : "+mymod.isPerfect(28));
        console.log(mymod.calFact(5));
         res.end();
    }).listen(3200);

console.log("listening to the server.....................");