var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	score : Number,
	distinguished : Boolean,
	gilded : String,
	retrieved_on : Date,
	ups : Number,
	subreddit :{type:String,index:1},
	author : {type:String,index:1},
	created_utc : {type:Number, index:1},
	author_flair_css_class : String,
	link_id : String,
	edited : Boolean,
	id :  String,
	body : String,
	subreddit_id :String,
	parent_id : String,
	author_flair_text : String,
	controversiality : Number

});

module.exports = mongoose.model('Comment', CommentSchema);