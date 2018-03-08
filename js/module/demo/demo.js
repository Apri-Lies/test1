define(["jquery", "bootstrap", "waterfall"], function($, bootstrap, waterfall) {
	! function() {
		//菜单
		var ul = $(".demo-menu"),
			li = $(".demo-menu li"),
			i = li.length,
			n = i - 1,
			r = 120;
		ul.click(function() {
			$(this).toggleClass('active');
			if($(this).hasClass('active')) {
				for(var a = 0; a < i; a++) {
					li.eq(a).css({
						'transition-delay': "" + (50 * a) + "ms",
						'-webkit-transition-delay': "" + (50 * a) + "ms",
						'-o-transition-delay': "" + (50 * a) + "ms",
						'transform': "translate(" + (r * Math.cos(90 / n * a * (Math.PI / 180))) + "px," + (-r * Math.sin(90 / n * a * (Math.PI / 180))) + "px",
						'-webkit-transform': "translate(" + (r * Math.cos(90 / n * a * (Math.PI / 180))) + "px," + (-r * Math.sin(90 / n * a * (Math.PI / 180))) + "px",
						'-o-transform': "translate(" + (r * Math.cos(90 / n * a * (Math.PI / 180))) + "px," + (-r * Math.sin(90 / n * a * (Math.PI / 180))) + "px",
						'-ms-transform': "translate(" + (r * Math.cos(90 / n * a * (Math.PI / 180))) + "px," + (-r * Math.sin(90 / n * a * (Math.PI / 180))) + "px"
					});
				}
			} else {
				li.removeAttr('style');
			}
		});
		//content
		var opt = {
			getResource: function(index, render) { //index为已加载次数,render为渲染接口函数,接受一个dom集合或jquery对象作为参数。通过ajax等异步方法得到的数据可以传入该接口进行渲染，如 render(elem)
				if(index >= 7) index = index % 7 + 1;
				var html = '';
				for(var i = 20 * (index - 1); i < 20 * (index - 1) + 20; i++) {
					var k = '';
					for(var j = 0; j < 3 - i.toString().length; j++) {
						k += '0';
					}
					k += i;
					var src = "http://cued.xunlei.com/demos/publ/img/P_" + k + ".jpg";
					html += '<div class="cell"><a href="#"><img src="' + src + '" /></a><p>' + k + '</p></div>';
				}
				return $(html);
			},
			auto_imgHeight: true,
			insert_type: 1
		}
		$('.grid').waterfall(opt);
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
	}($);
});