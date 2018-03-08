// 当前文件用于游戏的主逻辑
// 定义一个空数组,12格子黑块,默认值为0表示没有黑块,如果设置为1表示该块是黑块
var board=new Array();
// 定义计时器
var timerun = 0.000;// 数字类型是不精确类型
// 设置游戏分数 - 连续按对多少个黑色的方块（10）
var score = 0;
var t;
$(function(){
	// 完成游戏的初始化工作
	init();
});
// 该函数用于完成游戏初始化
function init(){
// 获取到HTML页面中的12个<div>元素（二维数组表示4行3列）
	// 遍历4遍，表示4行
	for(var i=0;i<4;i++){// i 是从 0 到 3
		board[i]=new Array();
		// 遍历3遍，表示3列
		for(var j=0;j<3;j++){// j 是从 0 到 2
			// board[i][j]二维数组表示4行3列
			// 设置12个白色的方块（棋盘）
			var $grid=$("#grid-"+i+"-"+j);
			$grid.css({
				"top":(i*100)+"px",
				"left":(j*100)+"px"
			});
			// 生成12个黑色的方块（棋子）
			// 将12个黑色的方块添加到游戏容器中
			$("#box_container").append($("<div class='block' id='block-"+i+"-"+j+"'></div>"));
			// 设置12个黑色的方块的top和left
			var $block=$("#block-"+i+"-"+j);
			$block.css({
				"top":(i*100)+"px",
				"left":(j*100)+"px"
			});
			// 将12个黑色的方块的值初始化为 0 ，表示不显示
			board[i][j]=0;
		}
	}
	// 每一行随机显示一个黑色的方块
	for(var i=0;i<4;i++){// 遍历4行
		// 随机生成3列中的位置：0 1 2
		var randy=Math.floor(Math.random()*3);
		// 判断当前位置位置的黑色方块的上一行同一列是否也为黑色
		if(i>0&&board[i-1][randy]==1){
			// 当前黑色方块的上一行同一列也是黑色方块
			randy=Math.floor(Math.random()*3);
		}
		// 根据随机位置获取对应的棋子<div>元素
		var $block=$("#block-"+i+"-"+randy);
		// 将其显示出来
		$block.css("background-color","#000");
		// 将显示的黑色的方块的值修改为 1，表示显示
		board[i][randy]=1;
	}
	// 在最后一行的3个方块中，输入文字提示
	$("#block-3-0").text("按J开始");
	$("#block-3-1").text("按K开始");
	$("#block-3-2").text("按L开始");
}
// 绑定键盘事件
$(document).keydown(function(event){
	// 键盘 J K L - event.keyCode
	switch (event.keyCode){
		case 74:	// J
			// 判断用户输入的键盘值是否是正确的
			if(board[3][0] == 1){
				// 正确 - 判断当前是否为第一次输入
				if(score == 0){
					// 第一次输入 - 游戏开始
					// 1. 计时器开始计时
					timeRun();
					// 2. 向下移动
					moveDown();
					// 3. 清空提示信息
					$("#block-3-0").text("");
					$("#block-3-1").text("");
					$("#block-3-2").text("");
				}else{
					// 不是第一次输入
					//判断当前书否为第50次
					if(score == 10){
						// gameover
						gameover();
					}else{
						// 2. 向下移动
						moveDown();
					}
				}
			}else{
				// 错误 - gameover
				gameover();
			}
			break;
		case 75:	// K
			// 判断用户输入的键盘值是否是正确的
			if(board[3][1] == 1){
				// 正确 - 判断当前是否为第一次输入
				if(score == 0){
					// 第一次输入 - 游戏开始
					// 1. 计时器开始计时
					timeRun();
					// 2. 向下移动
					moveDown();
					// 3. 清空提示信息
					$("#block-3-0").text("");
					$("#block-3-1").text("");
					$("#block-3-2").text("");
				}else{
					// 不是第一次输入
					//判断当前书否为第50次
					if(score == 10){
						// gameover
						gameover();
					}else{
						// 2. 向下移动
						moveDown();
					}
				}
			}else{
				// 错误 - gameover
				gameover();
			}
			break;
		case 76:	// L
			// 判断用户输入的键盘值是否是正确的
			if(board[3][2] == 1){
				// 正确 - 判断当前是否为第一次输入
				if(score == 0){
					// 第一次输入 - 游戏开始
					// 1. 计时器开始计时
					timeRun();
					// 2. 向下移动
					moveDown();
					// 3. 清空提示信息
					$("#block-3-0").text("");
					$("#block-3-1").text("");
					$("#block-3-2").text("");
				}else{
					// 不是第一次输入
					//判断当前书否为第50次
					if(score == 10){
						// gameover
						gameover();
					}else{
						// 2. 向下移动
						moveDown();
					}
				}
			}else{
				// 错误 - gameover
				gameover();
			}
			break;
	}
});

// 该函数用于计时器开始计时
function timeRun(){
	// 1. 计时器累加
	timerun += 0.001;		// 累加有问题
	// 2. 写入到HTML页面对应的元素中
	$("#time_box>span").text(timerun.toString().substr(0,5));
	// 3. 设置定时器
	t = setTimeout("timeRun()",1);
}
// 该函数用于向下移动
function moveDown(){
	// 1. 第一行、第二行及第三行黑色的方块整体向下移动一行
	for(var i=3;i>=0;i--){	// 遍历4行
		for(var j=2;j>=0;j--){	// 遍历3列
			if(i == 3){	// 表示第四行
				// 整个第四行的棋子的背景颜色修改为白色
				$("#block-"+i+"-"+j).css("background-color","#fff");
				// board对应元素 = 0
				board[i][j] = 0;
			}else{	// 表示前三行
				// 判断哪个方块是黑色的
				if(board[i][j] == 1){
					// 将当前黑色方块的下一行同一列的背景颜色设置为黑色
					$("#block-"+(i+1)+"-"+j).css("background-color","#000");

					// board对应元素 = 1
					board[i+1][j] = 1;

					// 将当前黑色方块的背景颜色修改为白色
					$("#block-"+i+"-"+j).css("background-color","#fff");

					// board对应元素 = 0
					board[i][j] = 0;
				}
			}
		}
		/*
		 if(i == 3){	// 判断当前是4行
		 for(var j=2;j>=0;j--){
		 // 整个第四行的棋子的背景颜色修改为白色
		 $("#block-"+i+"-"+j).css("background-color","#fff");
		 // board对应元素 = 0
		 board[i][j] = 0;
		 }

		 $("div[id^='block-3']").css("background-color","#fff");
		 board[i][0] = 0;
		 board[i][1] = 0;
		 board[i][2] = 0;

		 }else{	// 判断当前是前3行
		 // 判断当前行哪一列的方块是黑色的 board = 1;
		 if(){}

		 // 将当前黑色方块的下一行同一列的背景颜色设置为黑色

		 // board对应元素 = 1
		 // 将当前黑色方块的背景颜色修改为白色
		 // board对应元素 = 0
		 }
		 */
	}
	// 2. 第一行重新随机生成一个黑色的方块
	var randy = Math.floor(Math.random() * 3);
	$("#block-0-"+randy).css("background-color","#000");
	board[0][randy] = 1;

	// 游戏分数累加
	score++;
}

// 该函数用于结束游戏（待定）
function gameover(){
	// 1. 计时器停止
	clearTimeout(t);
	// 2. 完成gameover的页面提示
	$("#box_container").append($("<div id='gameover' class='gameover'><p>本次用时</p><span>"+timerun.toString().substr(0,5)+"秒</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>"));

	var gameover = $("#gameover");
	gameover.css({
		"width" : 300 + "px",
		"height" : 400 + "px",
		"background-color" : "rgba(0,0,0,0.5)"
	});
}
// 该函数用于游戏重新开始
function restartgame(){
	// 1. 将gameover显示内容清除
	$("#gameover").remove();
	// 2. 计时器重置为0.000
	$("#time_box").html("<span>0.000</span>秒");
	// 3. 游戏分数清 0
	score = 0;
	// 4. 将黑色方块清除
	$(".block").remove();
	// 5. init()方法
	init();
}