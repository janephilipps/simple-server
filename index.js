// At the top of our file we declare variables
// for all of the packages we're going to use
// in the file. For this example, we'll only need
// be using a single package called 'express'.
// We `require('express')` and save the results
// in an appropriately named variable.

var express = require('express');

// Next we declare a variable that instantiates
// the express server. Common names for this
// variable include `app` or `server`. We're
// going to call it `app` because that's what
// they do in the express documentation.

var app = express();

// Now that we have an app to build off of,
// we should set up some routes.

// The pattern for setting up routes in express is as follows
// 
// app . HTTP-VERB ( '/ROUTE/PATH/DELIMITED/BY/SLASHES' , function(req,res) { // DO STUFF HERE // });


// Our first route will be `GET /` which will respond
// with "Hello World" for every request that
// comes in to your server.

app.get('/', function(req, res) {
   res.send("<h2>To add:</h2> type add/number1/number2<br>" +
   			"<h2>To subtract:</h2> type /subtract/number1/number2<br>" +
   			"<h2>To multiply:</h2> type /multiply/number1/number2<br>" +
   			"<h2>To divide:</h2> type /divide/number1/number2")
});


app.get('/add/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x + y;
	res.send("Sum is " + sum);
});

app.get('/subtract/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var diff = x - y;
	res.send("Difference is " + diff);
});

app.get('/multiply/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var product = x * y;
	res.send("Product is " + product);
});

app.get('/divide/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var division = x / y;
	res.send("Division is " + division);
});

// Tell the app to start listening for
// requests on port 3000.

app.listen(3000);