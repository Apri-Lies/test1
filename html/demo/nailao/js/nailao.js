Echo.init({
  	offset: 100,
  	throttle: 300,
  	unload: false,
  	debounce:true,
 	callback: function(element, op) {
      if (op === 'load') {
        $(element).scrollspy({animation:'fade'});
      }
      console.log(element, 'has been', op + 'ed')
    }
});
// echo.render(); is also available for non-scroll callbacks