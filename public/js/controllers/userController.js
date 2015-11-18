app.controller('userController', ['$scope','$http','$routeParams','Reddit', function($scope,$http,$routeParams,Reddit){
	console.log('userController');

	if($routeParams.id){
		$scope.user = $routeParams.id;
		getUser($scope.user)
	}


	function getUser(user,page){
		Reddit.user(user).then(function(res){
			
			$scope.comments = res.results;
			$scope.meta = res.meta;
		})
	}

}])