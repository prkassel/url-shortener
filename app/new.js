var express = require('express');
var router = express.Router();
var urlModel = require('../models/url');

router.get('/', function(req, res) {
    res.send('you did it!');
});

router.get('/:url', function(req, res) {
    var address = new urlModel();
    address.original_url = req.params.url; 
    address.save(function(err, url) {
       if (err) {
           res.send(err);
       }
       res.json({original_url: url.original_url, short_url: 'https://url-shortener-prkassel.c9users.io/' + url.id});
    });
});

module.exports = router; 