seajs.config({
	// Sea.js 的基础路径  ./表示相对于当前文件的位置
	base: "./", //base路径
	// 路径配置
	paths: {
		'js': 'js/', //解析为js
		'vendors': 'lib/', //插件路径
	},
	// 别名配置
	alias: {
		'jquery': 'vendors/jquery/jquery.min', //配置jquery路径/lib/jquery/jquery.min.js
		'boot-css': 'vendors/bootstrap/css/bootstrap.css',
		'bootstrap': 'vendors/bootstrap/js/bootstrap.min.js',
		'angular': 'vendors/angular/angular.min',
		'ngRoute': 'vendors/angular-route/angular-route.min.js',
		'uiRoute': 'vendors/angular-ui-router/angular-ui-router.min.js',
		'imagesloaded': 'vendors/jquery/imagesloaded.min',
		'three': 'vendors/threeJs/three.min',
		'state': 'vendors/state/state.min'
	},
	preload: ['jquery']
});
//-------seajs.use为入口模块，也可以用 data-main="";(区别在于use可以加载多个入口函数，以及做一些回调的操作)------------
seajs.use('js/common/common');