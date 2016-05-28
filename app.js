var express = require('express');
var path = require('path');
var mongo = require('mongodb');

var routes = require('./routes/index');

var app = express();

//configure
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//middleware
app.use(express.static(path.join(__dirname, '/bower_components')));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes);

app.listen(1337, function() {
	console.log('ready on port 1337');
});
