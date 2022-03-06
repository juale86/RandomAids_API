var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Express' });
});

router.get('/probando', () => {
  red.send({res:'probando cosas'});
})
module.exports = router;
