$(function(){
	
	$(".a_radio").click(function(){
		radioStyle(this);
		$(this).parent().parent().find("input[type='hidden']").val($(this).attr("date"));
	});
	

	$(".table_box .warn-list").hide();
	$(".tab-editor li").click(function(){
		$(this).addClass("list").siblings().removeClass("list");
		var dian = $(this).index();
		$(".table_box>div").eq(dian).show().siblings().hide();//		first.eq(0).("click");
	})
	$(".table_box .warn-list").eq(0).show()
		var dian=0;
		var num=0
		$(".node_one").click(function(){	
			if(dian == 0){
				$(".node_one p").attr("class","img-bottom")
				$("#tr_1").show();
				dian =1;
			}else{
				$(".node_one p").attr("class","img-top")
				$("#tr_1").hide();
				$("#tr_1_1").hide();
				dian =0;
			}
//			
		})
		$(".node_two").click(function(){
			if(num == 0){
				$(".node_two p").attr("class","img-bottom")
				$("#tr_1_1").show();
				num =1;
			}else{
				$(".node_two p").attr("class","img-top")
				$("#tr_1_1").hide();
				num =0;
			}
		})

	
})

function radioStyle(obj){
	var name=$(obj).attr("name");
	if($(obj).hasClass("a_radio")){
		$("a[name='"+name+"']").removeClass("a_radio_h");
		$(obj).addClass("a_radio_h");
	}else{
		$(obj).removeClass("a_radio_h");
	}
}

	 

