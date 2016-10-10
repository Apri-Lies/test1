var cvs = document.getElementsByClassName("canvas")[0];
 console.log(cvs)
var ctx = cvs.getContext('2d');
//fillRect:绘制填充矩形fillRect(x,y,w,h)
ctx.fillStyle = 'blue';//设置填充色
/*ctx.fillRect(50,50,50,50);//坐标50,50绘制宽高均为50矩形
//strokeRect:描边矩形
ctx.strokeStyle = 'red';
ctx.strokeRect(150,150,100,100);
//clearRect:清除画布矩形范围
ctx.clearRect(50,50,25,25);
 ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(390,10);
ctx.moveTo(10,10);
ctx.lineTo(10,290);*/


setInterval(draw,20);//40ms 代表 25fps 20ms代表约60fps
//x代表矩形当前的水平坐标值，默认值0
var x = 11;
var speed,flag=1;//speed代表方块移动速度

//draw函数是绘制函数，它每秒钟执行约60次
function draw(){
    //1.清空画布
    ctx.clearRect(0,0,cvs.width,cvs.height);
    //2.动态改变
    if(flag==1){
        a()
    }else if(flag==0){
        b()
    }
    //3.绘制填充矩形，y值计算公式：(wh-rh)/2
    ctx.fillRect(x,125,50,50);
}
function a(){
    speed=10;
    x =x+speed;
    if(x>350){
        flag=0;
        return x,flag;
    }
}
function b(){
    speed=-5;
    x =x+speed;
    if(x<10){
        flag=1;
        return x,flag;
    }
}
