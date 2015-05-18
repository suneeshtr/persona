var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('uhsense', { title: 'uhSense' });
});

/* GET Userlist page. */
module.exports = router;
