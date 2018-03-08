define(function(require, exports, module) {
	//依赖模块
	require("jquery");
	//----对外提供公共的接口------
	var init = function() {
		$(".menu").on({
			"mouseenter": function() {
				$(this).animate({
						right: '0px',
						opacity: '1',
				},"slow");
			},
			"mouseleave": function() {
				$(this).animate({
						right: '-50px',
						opacity: '0.5',
				},"slow");
			}
		});
		$(".menu-list a").click(function() {
			$('a.active').removeClass('active');
			$(this).addClass('active');
			$(".o-content .container").slideUp('slow');
			$(".o-content .home-section").slideUp('slow');
			return false;
		});

		$(".menu-list a.homebutton").click(function() {
			$(".o-content .container").slideUp('slow');
			$(".o-content .home-section").slideDown('slow');
			return false;
		});

		$(".menu-list a.aboutbutton").click(function() {
			$(".o-content .container").slideUp('slow');
			$(".o-content .about-section").slideDown('slow');
			return false;
		});

		$(".menu-list a.projectbutton").click(function() {
			$(".o-content .container").slideUp('slow');
			$(".o-content .project-section").slideDown('slow');
			return false;
		});

		$(".menu-list a.blogbutton").click(function() {
			$(".o-content .container").slideUp('slow');
			$(".o-content .blog-section").slideDown('slow');
			return false;
		});

		$(".menu-list a.contactbutton").click(function() {
			$(".o-content .container").fadeOut();
			$(".o-content .contact-section").slideDown('slow');
			loadScript();
			return false;
		});
	};

	function loadScript() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
			'callback=initialize';
		document.body.appendChild(script);
	}

	function initialize() {
		var mapOptions = {
			zoom: 15,
			center: new google.maps.LatLng(16.8496189, 96.1288854)
		};
		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	}

	//暴露接口
	module.exports = init;
});