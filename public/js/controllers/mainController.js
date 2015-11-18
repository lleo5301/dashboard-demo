app.controller('mainController', ['$scope','$http','Reddit', function($scope,$http,Reddit){
	$scope.series = ['Subreddit'];
	$scope.loading = true;
	$scope.loadingUsers = true;
	// init
	Reddit.latest().then(function(data){
		$scope.comments = data;
	})


	Reddit.subredditChart().then(function(data){
		return data
	}).then(function(data){
		$scope.subreddit = data;
		$scope.labels = data.labels;
		$scope.data = [data.data];
		$scope.loading = false;
	})

	
	Reddit.usersAggregate().then(function(data){
		
		$scope.activeUsers = data;
		$scope.usersAggregate = {labels:[], data:[]};
		for(var i = 0; i < data.length; i ++){
			$scope.usersAggregate.labels.push(data[i].user);
			$scope.usersAggregate.data.push(data[i].total);
		}
		$scope.loadingUsers = false;

	})


 

  

}])