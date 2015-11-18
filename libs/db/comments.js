var Comments = require('../../models/comments.js');

module.exports = {
	get:function(start, end, callback){
		var start = start.toString();
		var end = end.toString();

		callback(null);
	},
	controversial:function(callback){
		//build aggregate
		var aggregate =  [
		{$group:{_id:'$controversiality'}, total:{$sum:1}}
		]

		Comments.aggregate(aggregate).exec(function(err, data){
			if(err){
				callback(err, null);
			}else{
				callback(null, data);
			}
		})
	}
}