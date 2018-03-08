define(function(require, exports, module) {
	//依赖模块
	require("jquery");
	//----对外提供公共的接口------
	exports.init = function() {
		console.log("this is moudle moudle")
	};
});