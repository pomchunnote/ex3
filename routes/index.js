var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'โคตรงง' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'โคตรงง' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'โคตรงง' });
});
module.exports = router;
