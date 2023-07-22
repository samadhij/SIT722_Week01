var express = require('express');
var router = express.Router();

const nameList = [
{'id':1, 'name': 'Samadhi', 'email': 'abc@gmail.com'},
{'id':2, 'name': 'Sarah', 'email': 'pqr@gmail.com'},
{'id':3, 'name': 'David', 'email': 'xyz@gmail.com'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT 722', subhead: 'Samadhi', names:nameList});
});

module.exports = router;
