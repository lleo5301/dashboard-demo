var Comments = require('../../models/comments.js');

module.exports = {
	get:function(rquery,callback){
		// console.log(page, limit);
		console.log(rquery);
		var query = {};
		var page = 1;
		var limit = 100;
		var skip = 0;
		//parse query
		if(rquery.user){
			query.author = rquery.user;
		}
		if(rquery.page > 1){
			page = 2;
			skip = (page-1) * limit;
		}
		Comments.find(query).count(function(err, count){
			Comments.find(query).sort({_id:-1}).skip(skip).limit(limit).exec(function(err, data){
				// console.log(err,data);
				data=data.map(function(comment){
					// console.log(comment.created_utc);
					date = new Date(comment.created_utc * 1000);
					console.log(date);
					return {comment:comment.body, 
							date:date, 
							subreddit:comment.subreddit,
							distinguished:comment.distinguished,
							ups: comment.ups,
							controversiality: comment.controversiality};
				});
				data = {meta:{total_records:count, page:page, total_pages:Math.floor(count/limit)}, results:data}
				returnCallback(err, data, callback);
			})
		})
		
	},
	controversial:function(callback){
		//build aggregate
		var aggregate =  [
		{$match:{controversiality:{$gt:100}}},
		{$group:{_id:'$controversiality',total:{$sum:1}}},
		{$limit:100}
		]

		Comments.aggregate(aggregate).exec(function(err,data){
			returnCallback(err,data,callback);
		});
	},
	subredditAggregate:function(callback){
		var aggregate = [
			{$limit:1000000},
			{$match:{subreddit:{$ne:null}}},
			{$group:{_id:'$subreddit', total:{$sum:1}}},
			{$sort:{total:-1}},
			{$match:{total:{$gte:10000}}},
			{$limit:5}
		]
		
		Comments.aggregate(aggregate).exec(function(err,data){
			returnCallback(err,data,callback);
		});
	},
	redditUsers:function(callback){
		var aggregate = [
			{$limit:100000},
			{$group:{_id:'$author'}},
			{$project:{user:'$_id', _id:0}}
		];

		Comments.aggregate(aggregate).exec(function(err,data){
			returnCallback(err,data,callback);
		});
	},
	userAggregate:function(callback){
		var aggregate = [
		{$match:{author:{$ne:"[deleted]"}}},
		{$limit:5000000},
		{$group:{_id:'$author', total:{$sum:1}}},
		{$project:{user:'$_id', total:1, _id:0}},
		{$sort:{total:-1}},
		{$limit:100}
		]
		Comments.aggregate(aggregate).allowDiskUse(true).exec(function(err, data){
			returnCallback(err, data, callback);
		})
	}

}




//callback function default
var returnCallback = function(err, data, callback){
	// console.log(err, data);
			if(err){
				console.log(err);
				callback(err, null);
			}else{
				// console.log(data);
				callback(null, data);
			}
};