var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/error', function(req, res, next) {
  res.render('error');
});
router.post('/', function(req, res) {
  // res.render('index');
  const { EMAIL , subscribe} = req.body;
  console.log(EMAIL)
  console.log(subscribe)
  console.log(req.body)
  res.redirect("/");
});

module.exports = router;
