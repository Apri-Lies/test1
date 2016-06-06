/**
 * Created by fanhao on 2016/6/4.
 */
$(function () {
    /*加载页面*/
    $(".header").load("../tpl/header.tpl nav");
    var listClass = $(".header .nav-menu").attr("class");
    if (listClass !== undefined) {
        if (listClass.indexOf("in") !== -1) {
            $(".header .nav-menu").removeClass("in");
        }
    }
    $(".footer").load("../tpl/footer.tpl");
    /*页面重新加载后事件会重新绑定，使用代理将事件绑定到父元素上*/
    $(document).on("click", ".header .navbar-toggle", function () {
        $(".header .nav-menu").hasClass("in") ? $(".header .nav-menu").removeClass("in") : $(".header .nav-menu").addClass("in");
    });
    $(document).on("click", ".nav-menu>li", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    /*返回顶部*/
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $(".backtop").fadeIn(1500);
        }
        else{
            $(".backtop").fadeOut(1500);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $(".backtop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
});