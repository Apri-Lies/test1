/*应用程序“开饭啦”的主模块*/
angular.module('kaifanla', ['ngRoute', 'ngAnimate', 'kaifanlaController', 'kaifanlaFilter', 'kaifanlaService'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/start', {
				templateUrl: 'tpl/start.html',
				controller: 'startCtrl'
			})
			.when('/main', {
				templateUrl: 'tpl/main.html',
				controller: 'mainCtrl'
			})
			.when('/detail/:dno', {
				templateUrl: 'tpl/detail.html',
				controller: 'detailCtrl'
			})
			.when('/order/:dno', {
				templateUrl: 'tpl/order.html',
				controller: 'orderCtrl'
			})
			.when('/myorder', {
				templateUrl: 'tpl/myorder.html',
				controller: 'myorderCtrl'
			})
			.otherwise({
				redirectTo: '/start'
			})
	})

/*应用程序“开饭啦”的Controller模块*/
angular.module('kaifanlaController', [])
	.controller('startCtrl', function($scope, $location, $rootScope) {
		$rootScope.jump = function(url) {
			$location.path(url);
		}
		$scope.jumpToMain = function() {
			$location.path('/main')
		}
	})
	.controller('mainCtrl', function($scope, $http) {
		//菜品搜索关键字sql
		$scope.kw = '';
		//监听搜索关键字的值的改变
		$scope.$watch('kw', function() {
			//console.log('搜索关键字改变了：'+$scope.kw);
			$http.get('php/dish_search.php?kw=' + $scope.kw)
				.success(function(data) {
					if(data instanceof Array && data.length > 0) {
						$scope.dishList = data; //清除已有的记录，只显示此次查询到的记录
					}
				});
		});

		//服务器端是否还有更多的记录，默认为true
		$scope.hasMore = true;

		//控制器一加载立即请求前5条记录
		$http.get('php/dish_list.php').success(function(data) {
			$scope.dishList = data;
		});

		//“加载更多”按钮处理函数
		$scope.loadMore = function() {
			$http.get('php/dish_list.php?start=' + $scope.dishList.length)
				.success(function(data) {
					if((data instanceof Array) && data.length > 0) {
						$scope.dishList = $scope.dishList.concat(data);
					} else {
						console.log('获取数据失败！或没有更多数据了！');
						$scope.hasMore = false;
					}
				});
		}
	})
	.controller('detailCtrl', function($scope, $routeParams, $http, $location) {
		$http.get('php/dish_getbyid.php?id=' + $routeParams.dno).success(function(data) {
			$scope.dish = data;
		});
		$scope.jumpToMain = function() {
			$location.path('/main');
		}
		$scope.jumpToOrder = function() {
			$location.path('/order/' + $routeParams.dno);
		}
	})
	.controller('orderCtrl', function($scope, $routeParams, $http, $rootScope) {
		$scope.formData = {
			did: $routeParams.dno
		};
		$scope.submit = function() {
			$http.post(
				'php/order_add.php',
				$.param($scope.formData), {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			).success(function(data) {
				if(data.result == 200) {
					$scope.succMsg = '订餐成功！您的订单编号为：' + data.oid + '。您可以在用户中心查看订单状态。'
					$rootScope.phone = $scope.formData.phone;
				} else {
					$scope.errMsg = '订餐失败！错误码为：' + data.result;
				}
			});
		}
	})
	.controller('myorderCtrl', function($scope, $routeParams, $http, $rootScope) {
		$http.get('php/order_list.php?phone=' + $rootScope.phone).success(function(data) {
			$scope.orderList = data;
		});
	})

/*应用程序“开饭啦”的自定义过滤器模块*/
angular.module('kaifanlaFilter', [])
	//.filter('',function(){})

/*应用程序“开饭啦”的自定义服务模块*/
angular.module('kaifanlaService', [])
	//.service('',function(){})