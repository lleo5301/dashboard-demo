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


// basic crud
router.get('/comments', function(req,res){
	comments.get(req.query, function(err, data){
		res.json(data);
	})
})

router.get('/users', function(req,res){
	comments.redditUsers(function(err, data){
		res.json(data);
	})
})








//aggregates
router.get('/controversial', function(req, res){
	comments.controversial(function(err, data){
		res.json(data);
	})
});

router.get('/subredditaggregate', function(req,res){
	console.log('subredditaggregate');
	comments.subredditAggregate(function(err, data){
		res.json(data);
	})
})

router.get('/userAggregate', function(req, res){
	console.log('userAggregate');
	comments.userAggregate(function(err, data){
		res.json(data);
	})
})




module.exports = router;