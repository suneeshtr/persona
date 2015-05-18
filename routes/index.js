var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('uhsense', { title: 'uhSense' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Userlist page. */
module.exports = router;
