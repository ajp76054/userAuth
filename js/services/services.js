var services = angular.module('userAuth.services', ['ngResource']);

services.factory('UserService', [function(){
	var sdo = {
		isLogged : false,
		username: ''
	};

	return sdo;
}]);