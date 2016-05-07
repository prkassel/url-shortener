var express = require('express');
var router = express.Router();
var urlModel = require('../models/url');

router.route('/').get(function(req, res) {
  res.render('index');
});

router.route('/:id').get(function(req, res) {
    urlModel.findById(req.params.id, function(err, url) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(url.original_url);
        }
    });
});
module.exports = router;