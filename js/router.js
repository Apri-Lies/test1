//angular加载页面
angular.module("myApp", ["ui.router"])
	.controller("myCtrl", function($scope, $location) {

		$scope.$on("$viewContentLoaded", function() {
			//console.log("ng-view content loaded!");
		});

		$scope.$on("$routeChangeStart", function(event, next, current) {
			//event.preventDefault(); //cancel url change
			//console.log("route change start!");
		});
	})
	.controller("homeCtrl", function($scope) {})
	.controller("blogCtrl", function($scope) {

	})
	.controller("demoCtrl", function($scope) {

	})
	.controller("otherCtrl", function($scope) {

	})
	.config(function($stateProvider, $urlRouterProvider) {
		//路由
		$urlRouterProvider
			.when("", "/home")
			.when("/blog", "/blog/20150923")
			/*.when(state.url, function($match, $stateParams) {
				if($state.$current.navigable !== state || !equalForKeys($match, $stateParams)) {
					$state.transitionTo(state, $match, false);
				}
			})*/
			.otherwise('/home');
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'html/home.html', // http://yemochen.github.io/
				controller: "homeCtrl"
			})
			.state('blog', {
				//abstract: true,
				url: '/blog',
				templateUrl: 'html/blog.html',
				controller: "blogCtrl"
			})
			.state("blog.20150923", {
				url: '/20150923',
				templateUrl: 'html/blog/20150923.html',
				controller: function($scope) {}
			})
			.state("blog.20151123", {
				url: '/20151123',
				templateUrl: 'html/blog/20151123.html',
			})
			.state("blog.20151216", {
				url: '/20151216',
				templateUrl: 'html/blog/20151216.html',
				controller: function($scope) {}
			})
			.state("blog.20160323", {
				url: '/20160323',
				templateUrl: 'html/blog/20160323.html',
				controller: function($scope) {}
			})
			.state('other', {
				url: '/other',
				templateUrl: 'html/other.html',
				controller: "otherCtrl"
			});
	});