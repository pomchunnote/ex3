var express = require('express');
var router = express.Router();
var contact = require("../config/databaes");

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = "select * from positions";
  contact.query(query, function(error,result){
    res.json(result)
  })

});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'โคตรงง' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'โคตรงง' });
});
module.exports = router;
