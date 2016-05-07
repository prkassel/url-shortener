require('dotenv').load();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connect = mongoose.connect(process.env.MONGO_URI);
autoIncrement.initialize(connect);

var urlSchema = new Schema({
    original_url: String, 
    short_url: String
});

urlSchema.plugin(autoIncrement.plugin, 'urlModel');

module.exports = mongoose.model('urlModel', urlSchema);