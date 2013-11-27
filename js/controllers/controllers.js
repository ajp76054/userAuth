var app = angular.module('userAuth', ['userAuth.services', 'userAuth.directives', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl',
		access: {
			isPublic : true
		}
	}).when('/home',{
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl',
		access: {
			isPublic : false
		}
	}).otherwise({redirectTo:'/'});
}]);

app.controller('LoginCtrl', ['$scope', '$http', 'UserService', function($scope, $http, User){
	$scope.login = function(){

	};
}]);

app.controller('HomeCtrl', ['$scope', 'UserService', function($scope, User){

}]);