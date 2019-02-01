var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PKC Hiring'});
});

router.get('/start', function(req, res, next){
  res.render('start', { title: 'Corporate Peon'});
});

module.exports = router;
