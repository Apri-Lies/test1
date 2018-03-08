define(function(require, exports, module) {
	//依赖模块
	require("jquery");
	require("bootstrap");
	//----对外提供公共的接口------
	var init = function() {
		/*菜单list*/
		var listClass = $(".nav-wrap .nav-menu").attr("class");
		if(listClass !== undefined) {
			if(listClass.indexOf("in") !== -1) {
				$(".nav-wrap .nav-menu").removeClass("in");
			}
		}
		$(".nav-wrap .navbar-toggle").click(function() {
			$(".nav-wrap .nav-menu").hasClass("in") ? $(".nav-wrap .nav-menu").removeClass("in") : $(".nav-wrap .nav-menu").addClass("in");
		});
		$(".nav-menu>li").click(function() {
			$(this).addClass("active").siblings().removeClass("active");
		});
	};
	//暴露接口
	module.exports = init;
});