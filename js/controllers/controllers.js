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
	$scope.loginUser = function(){

		var config = { method: 'post', url : 'path to your file',params : {user: $scope.user, pass: $scope.pass}};
		$http(config).success(function(response, status){
			if(status === '200'){
				if(response.success === true){
					// The response is looking for a json object with a poperty of success set to true
					// If true is return we update the user service to set isLogged to true and start the expire function.
					User.isLogged = true;
					User.expire(User, 21600000); // 6hrs
				}else{
					// Do something on error
				}
			}
		}).error(function(error){
			console.log(error);
		});
	};
}]);

app.controller('HomeCtrl', ['$scope', 'UserService', function($scope, User){

}]);