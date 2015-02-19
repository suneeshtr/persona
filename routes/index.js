var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Persona' });
});

/* GET Userlist page. */
router.post('/contact', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.name;
    var userEmail = req.body.email;
    var userMessage = req.body.message

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "name" : userName,
        "email" : userEmail,
        "message": userMessage
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("Persona");
            // And forward to success page
            res.redirect("/");
        }
    });
});
module.exports = router;
