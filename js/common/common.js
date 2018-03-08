define(function(require, exports, module) {
	//依赖模块
	require("jquery");
	var snow = require("js/common/snow");
	var cosmos = require("js/common/cosmos")
	var index = require('js/module/index/index');
	var blog = require('js/module/blog/blog');
	var other = require('js/module/other/other');
	//----对外提供公共的接口------
	exports.init = function() {
		console.log("this is common moudle")
	};
	//获取url 锚点 信息片断 param
	exports.getUrlParam = function() {
		var urlHash = null;
		$(window).load(function() {
			urlHash = window.location.hash;
			setAnimate(urlHash);
		});
		window.onhashchange = function() { // TODO，对应新的hash执行的操作函数
			urlHash = window.location.hash;
			setAnimate(urlHash);
		};
	};
	this.getUrlParam();
	
	function setAnimate(urlHash) {
		//在URL的参数列表（ 及URL中 "#"号后面的所有字符串） 发生变化的时候触发， hash的变化不会触发浏览器请求资源， 因此天然可以来处理页面内无刷新导航。
		// 浏览器支持onhashchange事件 ie8+ chrome firefox
		var str, strs;
		if(urlHash.indexOf("#") != -1) {
			str = urlHash.substr(3);
			strs = str.split("/");
		}
		//导航条选项处于选中状态
		var classStr = ".m-" + strs[0];
		$(classStr).addClass("active").siblings().removeClass("active");
		//不同url调用不同特效
		switch(strs[0]) {
			case 'home':
				/*雪花飘落的方法*/
				snow("snow-one", 0.001);
				snow("snow-two", 0.003);
				snow("snow-three", 0.05);
				index();
				break;
			case 'blog':
				cosmos("cosmos");
				blog();
				break;
			case 'other':
				other();
				break;
			default:
				break;
		}
	}
});