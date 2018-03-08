//angular-ui-router

angular.module("myApp", ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider
			.when("", "/PageTab/20151123")

		$stateProvider.state("PageTab", {
			url: "/PageTab",
			templateUrl: "html/test/PageTab.html"
		}).state("PageTab.20150923", {
			url: "/20150923",
			templateUrl: "html/blog/20150923.html"
		}).state("PageTab.20151123", {
			url: "/20151123",
			templateUrl: "html/blog/20151123.html"
		});
	});
//angular-Route
/*angular.module("myApp", ["ngRoute"])
	.controller("aController", function($scope, $route) {
		$scope.hello = "hello,a!";
	})
	.controller("bController", function($scope, $route) {
		$scope.hello = "hello,b!";
	})
	.controller("myCtrl", function($scope, $location) {

		$scope.$on("$viewContentLoaded", function() {
			//console.log("ng-view content loaded!");
		});

		$scope.$on("$routeChangeStart", function(event, next, current) {
			//event.preventDefault(); //cancel url change
			//console.log("route change start!");
		});
	})
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/a', {
				templateUrl: 'html/a.html',
				controller: 'aController'
			})
			.when('/b', {
				templateUrl: 'html/b.html',
				controller: 'bController',
				resolve: {
					// I will cause a 1 second delay
					delay: function($q, $timeout) {
						var delay = $q.defer();
						$timeout(delay.resolve, 100);
						return delay.promise;
					}
				}
			})
			.otherwise({
				redirectTo: '/a'
			});
	});*/