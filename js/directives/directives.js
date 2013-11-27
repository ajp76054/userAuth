var directives = angular.module('userAuth.directives', ['userAuth.services']);

directives.directive('checkuser', ['$rootScope', '$location', 'UserService', function($root, $location, User){
	return {
		restrict: 'A',
		link: function(scope, elem, attrs, ctrl){
			$root.$on('$routeChangeStart', function(event, curRoute, prevRoute){
				if(!curRoute.access.isPublic && !User.isLogged){
					$location.path('/login');
				}else{
					User.update(User, 21600000); // 6hrs
				}
			});
		}
	}
}]);