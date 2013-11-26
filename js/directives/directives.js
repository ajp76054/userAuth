var directives = angular.module('userAuth.directives', ['userAuth.services']);

directives.directive('checkuser', ['$rootScope', '$location', 'UserService', function($root, $location, UserService){
	return {
		restrict: 'A',
		link: function(scope, elem, attrs, ctrl){
			$root.$on('$routeChangeStart', function(event, curRoute, prevRoute){
				if(!curRoute.access.isPublic){
					console.log(scope);
				}
			});
			console.log(UserService);
			console.log(scope);
		}
	}
}]);