var express = require('express');
var path = require('path');
var app = express();

//configure
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware

//routes

app.get('/' , function(req, res) {
	res.render('index');
});

app.listen(1337, function() {
	console.log('ready on port 1337');
});
