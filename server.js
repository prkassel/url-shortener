var express = require('express');
var app = express();
var mongoose = require('mongoose');
var newUrl = require('./app/new');
var url = require('./app/url');
var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('client'));

app.use('/new', newUrl);
app.use('/', url);

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});