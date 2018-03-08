require.config({
    baseUrl: 'js',
    paths: {
        jquery:'jquery-1.11.3',
        less: 'less',
        bootstrap: '../bootstrap/js/bootstrap',
        angular: '../angularJs/js/angular',
        test:'test',
        'angular-route':'../angularJs/js/angular-route'
    },
	 shim: {                     //引入没有使用requirejs模块写法的类库。例如underscore这个类库，本来会有一个全局变量'_'。这里shim等于快速定义一个模块，把原来的全局变量'_'封装在局部，并导出为一个exports，变成跟普通requirejs模块一样
	        jquery: {
	            exports: '$'
	        },
	        less: {
	            exports: 'less'
	        },
	        angular: {
	            exports: 'angular'
	        },
	        bootstrap: {
	            exports: 'bootstrap'
	        },
	        test: {
	            exports: 'test'
	        },
	        'angular-route': {
	            deps: ['angular'],   //依赖什么模块
	            exports: 'ngRouteModule'
	        }
	    }
});
require(["jquery","less","test"],function($,less,test){
	
});