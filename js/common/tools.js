define(function(require, exports, module) {
	//----对外提供公共的接口------
	require("jquery");
	var init = function() {
		/*图片预加载*/
		/*function loadImage(url, callback) {
			var img = new Image(); //创建一个Image对象，实现图片的预下载
			img.src = url;
			if(img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
				callback.call(img);
				return; // 直接返回，不用再处理onload事件
			}
			img.onload = function() { //图片下载完毕时异步调用callback函数。
				callback.call(img); //将回调函数的this替换为Image对象
			};
		};*/
		/*图片预加载2*/
		/*var i = 0;
		var c = 3;
		var imgarr = new Array();
		imgarr[0] = "http://www.baidu.com/img/baidu_logo.gif";
		imgarr[1] = "http://img.baidu.com/img/logo-img.gif";
		imgarr[2] = "http://img.baidu.com/img/logo-zhidao.gif";
		var Browser = new Object();
		Browser.userAgent = window.navigator.userAgent.toLowerCase();
		Browser.ie = /msie/.test(Browser.userAgent);
		Browser.Moz = /gecko/.test(Browser.userAgent);

		function SImage(url, callback) {
			var img = new Image();
			if(Browser.ie) {
				img.onreadystatechange = function() {
					if(img.readyState == "complete" || img.readyState == "loaded") {
						ii = i + 1;
						callback(i);
					}
				}
			} else if(Browser.Moz) {
				img.onload = function() {
					if(img.complete == true) {
						ii = i + 1;
						callback(i);
					}
				}
			}
			img.src = url;
		}

		function icall(v) {
			if(v < c) {
				SImage("" + imgarr[v] + "", icall);
			} else if(v >= c) {
				i = 0;
				//location.replace('banner.html');//这里写自己的动作吧，
			}
		}*/
		/*轮播*/

		//去空格
		//str = str.replace(/([\r\n])|(\ +)|([ ])/g, "");
		//js获取url传递参数，js获取url？号后面的参数
		//方法一、正则表达式
		function getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if(r != null) return unescape(r[2]);
			return null;
		}　　
		//方法二、

		function GetRequest() {
			var url = location.search; //获取url中"?"符后的字串  
			var theRequest = new Object();
			if(url.indexOf("?") != -1) {
				var str = url.substr(1);
				strs = str.split("&");
				for(var i = 0; i < strs.length; i++) {
					theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
				}
			}
			return theRequest;
		}

		//方法三、

		/** 
		 * 获取指定的URL参数值 
		 * URL:http://www.quwan.com/index?name=tyler 
		 * 参数：paramName URL参数 
		 * 调用方法:getParam("name") 
		 * 返回值:tyler 
		 */
		function getParam(paramName) {
			paramValue = "", isFound = !1;
			if(this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
				arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
				while(i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
			}
			return paramValue == "" && (paramValue = null), paramValue
		}　　
		//其他参数获取介绍：
		//设置或获取对象指定的文件名或路径。
		alert(window.location.pathname);

		//设置或获取整个 URL 为字符串。
		alert(window.location.href);

		//设置或获取与 URL 关联的端口号码。
		alert(window.location.port);

		//设置或获取 URL 的协议部分。
		alert(window.location.protocol);

		//设置或获取 href 属性中在井号“#”后面的分段。
		alert(window.location.hash);

		//设置或获取 location 或 URL 的 hostname 和 port 号码。
		alert(window.location.host);

		//设置或获取 href 属性中跟在问号后面的部分。
		alert(window.location.search);

		我们可以用javascript获得其中的各个部分
		1, window.location.href
		整个URl字符串(在浏览器中就是完整的地址栏)
		本例返回值: http: //www.maidq.com/index.html?ver=1.0&id=6#imhere

			2, window.location.protocol
		URL 的协议部分
		本例返回值: http:

			3, window.location.host
		URL 的主机部分
		本例返回值: www.maidq.com

		4, window.location.port
		URL 的端口部分
		如果采用默认的80端口(update: 即使添加了: 80)， 那么返回值并不是默认的80而是空字符
		本例返回值: ""

		5, window.location.pathname
		URL 的路径部分(就是文件地址)
		本例返回值: /fisker/post / 0703 / window.location.html

		6, window.location.search
		查询(参数) 部分
		除了给动态语言赋值以外， 我们同样可以给静态页面, 并使用javascript来获得相信应的参数值
		本例返回值: ? ver = 1.0 & id = 6

		7, window.location.hash
		锚点
		本例返回值: #imhere

		//如何检测浏览器url变化

		用户通过“ 点击触发”，“ 操作历史”，“ 直接访问URL” 的方式修改当前URL。 这三种触发方式会使浏览器做出不同的行为

		html5提供了两种方式在页面中操作历史

		history.pushState(state, title, url)
		将当前URL和history.state加入到history中， 并用新的state和URL替换当前, 不会造成页面刷新。
		history.replaceState(state, title, url)
		用新的state和URL替换当前, 不会造成页面刷新。
		history.state
		如果当前URL不是通过pushState或者replaceState产生的， 那么history.state是null。
		提供检测历史记录变化的事件popstate

		每当处于激活状态的历史记录条目发生变化时, popstate事件就会在对应window对象上触发.

		如果当前处于激活状态的历史记录条目是由history.pushState() 方法创建, 或者由history.replaceState() 方法修改过的, 则popstate事件对象的state属性包含了这个历史记录条目的state对象的一个拷贝.

		调用history.pushState() 或者history.replaceState() 不会触发popstate事件.
		popstate事件只会在浏览器操作如点击前进or后退按钮(JS调用也可), URL中 "#"
		后面的字符串改变时触发.
		利用这一特性， 就可以处理无刷新页面的前端后退， 保存历史操作的页面状态啦。
		window.addEventListener('popstate', function(event) {
			readState(event.state);
		});
		for(i = 0; i < 5; i++) {
			var stateObject = { id: i };
			var title = "Wow Title " + i;
			var newUrl = "/my/awesome/url/" + i;
			history.pushState(stateObject, title, newUrl);
		}

		function readState(data) {
			alert(data.id);
		}　

		hashchange

		在URL的参数列表（ 及URL中 "#"
		号后面的所有字符串） 发生变化的时候触发， hash的变化不会触发浏览器请求资源， 因此天然可以来处理页面内无刷新导航。

		兼容如下：

		IE8 + | FF3 .6 + | Safari5 + | Chrome | Opera 10.6 + 支持hashchange
		event对象有两个属性： oldURL和newURL, FF3 .6 + Chrome Opera支持 oldURL 和 newURL
		在IE6、 7 下可以采用定时循环检测或者采用添加隐藏iframe的方式来解决， 如：
		if(('onhashchange' in window) && ((typeof document.documentMode === 'undefined') || document.documentMode == 8)) {
			// 浏览器支持onhashchange事件
			window.onhashchange = hashChangeFire; // TODO，对应新的hash执行的操作函数
		} else {
			// 不支持则用定时器检测的办法
			setInterval(function() {
				// 检测hash值或其中某一段是否更改的函数， 在低版本的iE浏览器中通过window.location.hash取出的指和其它的浏览器不同，要注意
				　　　　
				var ischanged = isHashChanged();
				if(ischanged) {
					hashChangeFire(); // TODO，对应新的hash执行的操作函数
				}
			}, 150);
		}

		总结

		在前端的实际应用场景中， 如果页面局部刷新， 不改变URl， 在页面刷新、 前进、 后退， 或者想分享一个具体的页面状态链接的时候， 就会体验特别差。

		如果要改变url进行局部更新， 这时检测到URL的变化就非常重要。

		我们可以利用改变hash触发hashchange或者兼容方案定时检测hashchange的方法， 来达到更改页面Url并同时更新页面局部显示状态的效果。 不过有时会期望单页中的URL和服务端开发时的URL风格比较一致， 会在document上监听链接的点击， 利用html5 history提供的API来改变URl， 并调用相应的处理函数来达到不刷新页面同时更新页面局部状态的目的

		以上已经能好的解决了页面内功能无刷新导航的功能， 但还有一个需要注意的是， 第一次访问链接或者刷新页面URL时， 需要后端配合将本页的所有URL做一下重定向。 另外首次从不同的URL进入时， 也需要在前端根据URL进行一下手动的分发。

	};
	module.exports = init;
});