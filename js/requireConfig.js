require.config({
	baseUrl: '../',//基础路径
	paths: {
		jquery: 'lib/jquery/jquery.min',
		bootstrap: 'lib/bootstrap/js/bootstrap.min',
		'imagesloaded': 'lib/jquery/imagesloaded.min',
		'waterfall': 'lib/jquery/waterfall',
		'demo': 'js/module/demo/demo'
	},
	//配置不兼容amd的模块
	shim: {
		bootstrap: {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		'imagesloaded':{
			deps: ['jquery'],
			exports: 'imagesloaded'
		},
		'waterfall': {
			deps: ['jquery'],
			exports: 'waterfall'
		}
	}
});
require(["demo"], function(demo) {
	
});