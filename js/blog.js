$(function() {
	/*加载页面*/
	$(".header").load("tpl/header.tpl nav");
	var listClass = $(".header .nav-menu").attr("class");
	if(listClass !== undefined) {
		if(listClass.indexOf("in") !== -1) {
			$(".header .nav-menu").removeClass("in");
		}
	}
	$(".blog-sidebar .sidebar-module ol>li>a").click(loadUrl);

	function loadUrl() {
		var aHref = $(this).prop("href");
		var temporary = aHref.split("#");
		var aload = "tpl/" + temporary[1] + ".tpl";
		$(".blog-main").load(aload);
		return aload;
	}
	$(".footer").load("tpl/footer.tpl", function() {
		var titleActive = $(".nav-menu li>a");
		for(var i = 0; i < titleActive.length; i++) {
			if($(titleActive[i]).html() == "Blog") {
				/*$(".nav-menu li")[i].addClass("active").siblings().$removeClass("active");*/
			}
		}
	});
	/*页面重新加载后事件会重新绑定，使用代理将事件绑定到父元素上*/
	$(document).on("click", ".header .navbar-toggle", function() {
		$(".header .nav-menu").hasClass("in") ? $(".header .nav-menu").removeClass("in") : $(".header .nav-menu").addClass("in");
	});
	$(document).on("click", ".nav-menu>li", function() {
		$(this).addClass("active").siblings().removeClass("active");
	});
	/*返回顶部*/
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	$(window).scroll(function() {
		if($(window).scrollTop() > 100) {
			$(".backtop").fadeIn(1500);
		} else {
			$(".backtop").fadeOut(1500);
		}
	});
	//当点击跳转链接后，回到页面顶部位置
	$(".backtop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	//tabs
});
// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
/*!
 * Copyright 2014-2015 Twitter, Inc.
 *
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see https://creativecommons.org/licenses/by/3.0/.
 */
// Intended to prevent false-positive bug reports about Bootstrap not working properly in old versions of IE due to folks testing using IE's unreliable emulation modes.
(function() {
	'use strict';

	function emulatedIEMajorVersion() {
		var groups = /MSIE ([0-9.]+)/.exec(window.navigator.userAgent)
		if(groups === null) {
			return null
		}
		var ieVersionNum = parseInt(groups[1], 10)
		var ieMajorVersion = Math.floor(ieVersionNum)
		return ieMajorVersion
	}

	function actualNonEmulatedIEMajorVersion() {
		// Detects the actual version of IE in use, even if it's in an older-IE emulation mode.
		// IE JavaScript conditional compilation docs: https://msdn.microsoft.com/library/121hztk3%28v=vs.94%29.aspx
		// @cc_on docs: https://msdn.microsoft.com/library/8ka90k2e%28v=vs.94%29.aspx
		var jscriptVersion = new Function('/*@cc_on return @_jscript_version; @*/')() // jshint ignore:line
		if(jscriptVersion === undefined) {
			return 11 // IE11+ not in emulation mode
		}
		if(jscriptVersion < 9) {
			return 8 // IE8 (or lower; haven't tested on IE<8)
		}
		return jscriptVersion // IE9 or IE10 in any mode, or IE11 in non-IE11 mode
	}

	var ua = window.navigator.userAgent
	if(ua.indexOf('Opera') > -1 || ua.indexOf('Presto') > -1) {
		return // Opera, which might pretend to be IE
	}
	var emulated = emulatedIEMajorVersion()
	if(emulated === null) {
		return // Not IE
	}
	var nonEmulated = actualNonEmulatedIEMajorVersion()
	if(emulated !== nonEmulated) {
		window.alert('WARNING: You appear to be using IE' + nonEmulated + ' in IE' + emulated + ' emulation mode.\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\nPLEASE DON\'T FILE BOOTSTRAP BUGS based on testing in IE emulation modes!')
	}
})();
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width
(function() {
	'use strict';
	if(navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style')
		msViewportStyle.appendChild(
			document.createTextNode('@-ms-viewport{width:auto!important}')
		)
		document.querySelector('head').appendChild(msViewportStyle)
	}
})();

//宇宙特效canvas动画
"use strict";
var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	w = canvas.width = window.innerWidth,
	h = canvas.height = window.innerHeight,

	hue = 217,
	stars = [],
	count = 0,
	maxStars = 1300; //星星数量

var canvas2 = document.createElement('canvas'),
	ctx2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
	gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, '#CCC');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

// End cache

function random(min, max) {
	if(arguments.length < 2) {
		max = min;
		min = 0;
	}

	if(min > max) {
		var hold = max;
		max = min;
		min = hold;
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
	var max = Math.max(x, y),
		diameter = Math.round(Math.sqrt(max * max + max * max));
	return diameter / 2;
	//星星移动范围，值越大范围越小，
}

var Star = function() {

	this.orbitRadius = random(maxOrbit(w, h));
	this.radius = random(60, this.orbitRadius) / 8;
	//星星大小
	this.orbitX = w / 2;
	this.orbitY = h / 2;
	this.timePassed = random(0, maxStars);
	this.speed = random(this.orbitRadius) / 50000;
	//星星移动速度
	this.alpha = random(2, 10) / 10;

	count++;
	stars[count] = this;
}

Star.prototype.draw = function() {
	var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
		y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
		twinkle = random(10);

	if(twinkle === 1 && this.alpha > 0) {
		this.alpha -= 0.05;
	} else if(twinkle === 2 && this.alpha < 1) {
		this.alpha += 0.05;
	}

	ctx.globalAlpha = this.alpha;
	ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
	this.timePassed += this.speed;
}

for(var i = 0; i < maxStars; i++) {
	new Star();
}

function animation() {
	ctx.globalCompositeOperation = 'source-over';
	ctx.globalAlpha = 0.5; //尾巴
	ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
	ctx.fillRect(0, 0, w, h)

	ctx.globalCompositeOperation = 'lighter';
	for(var i = 1, l = stars.length; i < l; i++) {
		stars[i].draw();
	};

	window.requestAnimationFrame(animation);
}

animation();