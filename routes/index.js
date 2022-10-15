var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANJAC',name:'Karthik',rollno:'21PA43',class:'II-MCA' });
});

module.exports = router;
