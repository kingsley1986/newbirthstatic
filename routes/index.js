var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index.ejs");
});

router.get('/about', function(req, res, next) {
  res.render("about.ejs");
});

router.get('/contact', function(req, res, next) {
  res.render("contact.ejs");
});

// router.get('/', function(req, res, next) {
//   res.render("index.ejs");
// });

// router.get('/', function(req, res, next) {
//   res.render("index.ejs");
// });

// router.get('/', function(req, res, next) {
//   res.render("index.ejs");
// });


module.exports = router;
