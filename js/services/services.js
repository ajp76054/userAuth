var services = angular.module('userAuth.services', ['ngResource']);

services.factory('UserService', ['$timeout', function($timeout){
	var sdo = {
		isLogged : false,
		username: '',
		expire: function(user, time){
			stop = $timeout(function(){
				user.isLogged = false;
				console.log('Timer expired');
			},time);
		},
		update: function(user, time){
			$timeout.cancel(stop);
			user.expire(user, time);
		}
	};

	return sdo;
}]);