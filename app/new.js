var express = require('express');
var router = express.Router();
var urlModel = require('../models/url');
var validate = require('validate.js');

router.get('/', function(req, res) {
    res.send('you did it!');
});

router.get('/:url', function(req, res) {
    var notValidated = validate({website: req.params.url}, {website: {url: true}});
    
    if (notValidated !== undefined) {
        res.send(notValidated);
    }
    
    else {
    var address = new urlModel();
    address.original_url = req.params.url; 

    address.save(function(err, url) {
      if (err) {
          res.send(err);
      }
      res.json({original_url: url.original_url, short_url: 'https://glacial-woodland-61643.herokuapp.com/' + url.id});
    });
    }
});

module.exports = router; 