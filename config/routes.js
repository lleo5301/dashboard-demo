var express = require('express');
var router = express.Router();


// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define top level api
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define comments route
router.get('/comments', function(req, res) {
  res.send('About birds');
});




module.exports = router;