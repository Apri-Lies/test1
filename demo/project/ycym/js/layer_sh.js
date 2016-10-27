$(function(){
	
	$(".edit-pass1").click(function(){
		editpass1()
		$(".close-user").click(function(){
			 $(".pass_word").hide();
		})
	})	
	
	$(".assess-details").click(function(){
		window.location.href="评估预约分配记录.html";
	})

	$(".assess-details-sub").click(function(){
		window.location.href="置换预约分配记录.html";
	})
	
	
	
	$(".add-sector-yg").click(function(){
		window.location.href="添加员工.html";
	})	
	
	
	
	$(".add-sector-subgl").click(function(){
		window.location.href="子站用户管理.html";
	})
	
$(".add-sector-subly").click(function(){
		window.location.href="子站留言.html";
		
	})
})


	 
 function editpass(){
 	 var width =(document.documentElement.clientWidth-600)/2;
 	 var height =(document.documentElement.clientHeight-560)/2;
	 $(".pass_word").css("top",	height + "px").css("left",width + "px")
	 $(".pass_word ").show();
	 window.onresize = function(){
		var width =(document.documentElement.clientWidth-360)/2;
		var height =(document.documentElement.clientHeight-560)/2;
		$(".pass_word ").css("top",height + "px").css("left",width + "px")
	 }
 }        

