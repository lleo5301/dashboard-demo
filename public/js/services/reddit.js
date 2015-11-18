app.service('Reddit', ['$http','$q', function($http, $q){
	this.latest=function(){
		var deferred = $q.defer();
		$http.get('../api/v1/comments').then(function(res){
			deferred.resolve(res.data.results);
		});
		return deferred.promise;
	};

	this.subredditaggregate= function(){
		var deferred = $q.defer();
		$http.get('../api/v1/subredditaggregate').then(function(res){
			deferred.resolve(res.data);
		});
		return deferred.promise;
	};

	this.subredditChart= function(){
		var deferred = $q.defer();
		$http.get('../api/v1/subredditaggregate').then(function(res){
			var totals = [];
			var labels = [];
			res.data.map(function(a){
				labels.push(a._id);
				totals.push(a.total);
			})
			console.log(totals);
			console.log(labels);
			deferred.resolve({data:totals, labels:labels}); 
		});
		return deferred.promise;
	};
	this.users = function(){
		var deferred = $q.defer();
		$http.get('../api/v1/redditusers').then(function(res){
			deferred.resolve(res.data);
		});
		return deferred.promise;
	};
	this.usersAggregate = function(){
		var deferred = $q.defer();
		$http.get('../api/v1/userAggregate').then(function(res){
			deferred.resolve(res.data);
		});
		return deferred.promise;
	};
	this.usersAggregateChart = function(){
		var deferred = $q.defer();
		this.usersAggregate().then(function(data){
			var toReturn = {
				data:[],
				labels:[]
			}
			for(var i =0; i < data.length; i++){
				toReturn.data.push(data[i].total);
				toReturn.labels.push(data[i].user);
			}
			deferred.resolve(toReturn);
		});
		return deferred.promise;
	};
	this.user = function(user,page){
		if(!page){
			page = 0;
		}
		var deferred = $q.defer();
		$http.get('../api/v1/comments?user=' +  user + '&page='+page).then(function(res){
			deferred.resolve(res.data);
		});
		return deferred.promise;
	}

}]);





