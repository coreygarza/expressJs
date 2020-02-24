var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Landing Page by Corey' });
// });
router.get('/', index.index);
module.exports = router;
