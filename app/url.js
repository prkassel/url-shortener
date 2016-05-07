var express = require('express');
var router = express.Router();
var urlModel = require('../models/url');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:id', function(req, res) {

    urlModel.findById(req.params.id, function(err, url) {
        if (err) {
            res.send(err);
        }
            res.redirect(url.original_url);
    });
});
module.exports = router;