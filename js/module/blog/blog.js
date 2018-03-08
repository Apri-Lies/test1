define(function(require, exports, module) {
	//依赖模块
	require("jquery");
	//----对外提供公共的接口------
	var init = function() {
		$(".nav-wrap .nav-bar").css("background-color","rgba(200,229,188,.3)");
		//左侧
		//右侧
		$(".blog-sidebar .sidebar-module").on("click","a",function(){
			var aHref = $(this).prop("href");
			var temporary = aHref.split("#");
			var aload = "html/blog/" + temporary[1] + ".html";
			$(".blog-main").data("ng-include",aload);
			console.log($(".blog-main").data("ng-include"))
		});
		/*返回顶部*/
		//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
		$(window).scroll(function() {
			if($(window).scrollTop() > 500) {
				$("#backtop").fadeIn(1000);
			} else {
				$("#backtop").fadeOut(1000);
			}
		});
		//当点击跳转链接后，回到页面顶部位置
		$("#backtop").click(function(e) {
			e.preventDefault();
			$('body,html').animate({
				scrollTop: 0
			}, 2000);
			return false;
		});
	};
	//暴露接口
	module.exports = init;
});