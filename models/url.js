//uncomment for local deployment/commented out for heroku
//require('dotenv').load();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connect = mongoose.connect(process.env.MONGODB_URI);
autoIncrement.initialize(connect);

var urlSchema = new Schema({
    original_url: String, 
    short_url: String
});

urlSchema.plugin(autoIncrement.plugin, 'urlModel');

module.exports = mongoose.model('urlModel', urlSchema);