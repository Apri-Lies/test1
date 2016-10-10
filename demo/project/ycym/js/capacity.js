/**
 * Created by fanhao on 2016/5/9.
 */
/*弹框*/
function capacity(obj){
    var arr=[];
    var attClass = $(obj).attr("class");
    arr = attClass.split(" ");
    var lastClass=arr[arr.length-1];
    var lastClass_box="."+lastClass+"-box";
    $(lastClass_box).show();
    $(".close").click(function() {
        $(lastClass_box).hide();
    })
    $(".cancel").click(function() {
        $(lastClass_box).hide();
    })
}