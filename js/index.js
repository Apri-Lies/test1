$(function () {
    /*菜单list*/
    var listClass = $(".header .nav-menu").attr("class");
    if(listClass !== undefined){
        if(listClass.indexOf("in") !== -1){
            $(".header .nav-menu").removeClass("in");
        }
    }
    $(".header .navbar-toggle").click(function () {
        $(".header .nav-menu").hasClass("in") ? $(".header .nav-menu").removeClass("in") : $(".header .nav-menu").addClass("in");
    });
    $(".nav-menu>li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    /*自适应高度*/
    document.getElementsByClassName("main")[0].style.height=$(document).height()+"px";
    window.onresize = function(){
        document.getElementsByClassName("main")[0].style.height=$(document).height()+"px";
    }
    /*左边的ul和右边轮播*/
    setInterval(function(){
        var index_li = $(".main .carousel-ul li.active").index();
        var left_li = $(".main .left-ul li");
        $(left_li[index_li]).addClass("active").siblings().removeClass("active");
    },50)
    /*雪花飘落的方法*/
    snow("snow-one",0.005);
    snow("snow-two",0.01);
    snow("snow-three",0.02);
    function snow(id,speed) {
        var strId = id.toString();
        /*console.log(strId)*/
        if (1 == 1) {
            var b = document.getElementById(strId),
                a = b.getContext("2d"),
                d = window.innerWidth,
                c = window.innerHeight;
            b.width = d;
            b.height = c;
            for (var e = [], b = 0; b < 70; b++) {
                e.push({
                    x: Math.random() * d,
                    y: Math.random() * c,
                    r: Math.random() * 4 + 1,
                    d: Math.random() * 70
                })
            }
            var h = 0;
            window.intervral4Christmas = setInterval(function () {
                a.clearRect(0, 0, d, c);
                a.fillStyle = "rgba(255,255,255,0.9)";
                a.shadowBlur = 5;
                a.shadowColor = "rgba(255,255,255,1)";
                a.beginPath();
                for (var b = 0; b < 70; b++) {
                    var f = e[b];
                    a.moveTo(f.x, f.y);
                    a.arc(f.x, f.y, f.r, 0, Math.PI * 2, !0)
                }
                a.fill();
                h += /*0.01*/speed;
                for (b = 0; b < 70; b++) {
                    if (f = e[b], f.y += Math.cos(h + f.d) + 1 + f.r / 2,
                            f.x += Math.sin(h) * 2, f.x > d + 5 || f.x < -5 || f.y > c) {
                        e[b] = b % 3 > 0 ? {x: Math.random() * d, y: -10, r: f.r, d: f.d} :
                            Math.sin(h) > 0 ? {x: -5, y: Math.random() * c, r: f.r, d: f.d} :
                            {x: d + 5, y: Math.random() * c, r: f.r, d: f.d}
                    }
                }
            }, 70)
        }
    }
})