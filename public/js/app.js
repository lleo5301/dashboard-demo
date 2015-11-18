var app = angular.module('dashboard', ['ngRoute', 'chart.js']);


//route config
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/comments',{
		templateUrl:'views/comments.html',
		controller:'commentController'
	}).
	when('/users', {
		templateUrl:'views/users.html',
		controller:'userController'
	}).
	when('/user/:id',{
		templateUrl:'views/user.html',
		controller:'userController'
	}).
	when('/stats', {
		templateUrl:'views/stats.html',
		controller:'statController.js'
	}).
	otherwise({
		templateUrl:'views/home.html',
		controller:'mainController'
	})
}]);
