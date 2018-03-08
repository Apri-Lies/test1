$(function(){
	
	
	$("#username").blur(function(){
		if($("#username").val() == ""){
			$("#label_moblie").css("display","inline");
			$("#msg").text("请输入用户名").show();return;
		}
	});
	$("#password").blur(function(){
		if($("#password").val() == ""){
			$("#label_pass").css("display","inline");
			$("#msg").text("请输入密码").show(); return; 
		}
		if($("#password").val().length > 16 || $("#password").val().length <6){
			$("#msg").text("密码需在6-16个字符内").show(); return; 
		}
	});
		
	$("#captcha").blur(function(){
		if($("#captcha").val() == ""){
			$("#label_cap").css("display","inline");
			$("#msg").text("请输入商家代码").show(); return; 
		}
	});
	
	$("#code").blur(function(){
		if($("#code").val() == ""){
			$("#label_cap").css("display","inline");
			$("#msg").text("请输入验证码").show(); return; 
		}
	});

});