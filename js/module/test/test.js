angular.module("myApp", ["ngRoute"])
	.controller("myCtrl", function($scope, $location) {

		$scope.$on("$viewContentLoaded", function() {
			//console.log("ng-view content loaded!");
		});

		$scope.$on("$routeChangeStart", function(event, next, current) {
			//event.preventDefault(); //cancel url change
			//console.log("route change start!");
		});
	})
	.controller("homeCtrl", function($scope, $route) {
		$scope.hello = "home";
	})
	.controller("blogCtrl", function($scope, $route) {
		$scope.hello = "blog";
	})
	.controller("demoCtrl", function($scope, $route) {
		$scope.hello = "demo";
	})
	.controller("otherCtrl", function($scope, $route) {
		$scope.hello = "demo";
	})
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'html/home.html', // http://yemochen.github.io/
				controller: 'homeCtrl'
			})
			.when('/blog', {
				templateUrl: 'html/blog.html',
				controller: 'blogCtrl'
				/*resolve: {
					// I will cause a 1 second delay
					delay: function($q, $timeout) {
						var delay = $q.defer();
						$timeout(delay.resolve, 100);
						return delay.promise;
					}
				}*/
			})
			.when('/demo', {
				templateUrl: 'html/demo.html',
				controller: 'demoCtrl'
			})
			.when('/other', {
				templateUrl: 'html/other.html',
				controller: 'otherCtrl'
			})
			.when('/github', {
				templateUrl: 'https://help.github.com/',
				controller: 'otherCtrl'
			})
			.otherwise({
				redirectTo: '/home'
			});
	});