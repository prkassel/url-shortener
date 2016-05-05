var express = require('express');
var app = express();
var mongoose = require('mongoose');
require('dotenv').load();

mongoose.connect(process.env.MONGO_URI);

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('It works!');
});
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});