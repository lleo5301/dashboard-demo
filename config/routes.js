var express = require('express');
var router = express.Router();
var comments = require('../libs/db/comments');


// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define top level api
router.get('/', function(req, res) {
  res.send('nothing here');
});
// define comments route
router.get('/comments', function(req, res) {
  
});




module.exports = router;