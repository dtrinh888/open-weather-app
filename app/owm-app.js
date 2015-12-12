angular.module('OWMApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'home.html',
			controller: 'HomeCtrl'
		}).when('/cities/:city', {
			templateUrl: 'city.html',
			controller: 'CityCtrl'
		});
	}])
	.controller('HomeCtrl', ['$scope', function($scope){

	}])
	.controller('CityCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
		$scope.city = $routeParams.city;
	}]);