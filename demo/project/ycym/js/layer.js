$(function(){
	//部门管理
		// $(".add-sector").click(function(){
		// newsector()
		// $(".close-sector ").click(function(){
			  // $(".new-sector").hide();
			   // $(".layer-bg").hide();
		 // })
		 // $(".lour-close").click(function(){
			  // $(".new-sector").hide();
				// $(".layer-bg").hide();
		 // })
	 // })
	 
	 $('.add-dept').click(function(){
		$('.new-dept').show();	
	})
	$('.lour-close').click(function(){
		$('.new-dept').hide();
	})
	
	//岗位管理 新增
	$(".add-job").click(function(){
		newjobs()
		$(".close-jobs").click(function(){
			 $(".new-jobs").hide();
			 $(".layer-bg").hide();
		})
		$(".lour-close").click(function(){
			 $(".new-jobs").hide();
			 $(".layer-bg").hide();
		})
	})
	
	
	//子站管理编辑
	$(".us_edit").click(function(){
		upedit()
		$(".close-person").click(function(){
			 $(".up-person").hide();
			 $(".layer-bg").hide();
		})
		$(".lour-close").click(function(){
			 $(".up-person").hide();
			 $(".layer-bg").hide();
		})
	})
	
	
	//添加子站用户
	$(".add-user").click(function(){
		newuser()
		$(".close-user").click(function(){
			 $(".user").hide();
			 $(".layer-bg").hide();
		})
		$(".lour-close").click(function(){
			 $(".user").hide();
			 $(".layer-bg").hide();
		})
	})
	
	//添加保证金合同
	$(".add-pact").click(function(){
		newpact()
		$(".close-pact").click(function(){
			 $(".new-pact").hide();
			 $(".layer-bg").hide();
		})
		$(".lour-close").click(function(){
			 $(".new-pact").hide();
			 $(".layer-bg").hide();
		})
	})
	
	//编辑区域拍卖中心
	$(".add-choice").click(function(){
		choiceedit()
		$(".close-choice").click(function(){
			 $(".choice-edit").hide();
			 $(".layer-bg").hide();
		})
		$(".lour-close").click(function(){
			 $(".choice-edit").hide();
			 $(".layer-bg").hide();
		})
	})
	
	//4s添加保证金
	$(".add-four").click(function(){
		fourbail()
		$(".close-four").click(function(){
			 $(".four-bail").hide();
			 $(".layer-bg").hide();
		})
		$(".lour-close").click(function(){
			 $(".four-bail").hide();
			 $(".layer-bg").hide();
		})
	})
	
	//车商添加保证金
	$(".add-car").click(function(){
		carbail()
		$(".close-car").click(function(){
			 $(".car-bail").hide();
			 $(".layer-bg").hide();
		})
		$(".lour-close").click(function(){
			 $(".car-bail").hide();
			 $(".layer-bg").hide();
		})
	})
	
	//子站留言弹出层
	$(".stationmessage").click(function(){
		$(".see-box").show();
		$(".see-cancel").click(function(){
			 $(".see-box").hide();
		})
		$(".see-close").click(function(){
			 $(".see-box").hide();
		})
	})
	//预约评估分配弹出层
	$(".selectmerchant").click(function(){
		$(".allot-box").show();
		$(".allot-close").click(function(){
			 $(".allot-box").hide();
		})
		$(".allot-cancel").click(function(){
			 $(".allot-box").hide();
		})
	})
	
	$(".selectmerchantsub").click(function(){
		$(".allot-box").show();
		$(".allot-close").click(function(){
			 $(".allot-box").hide();
		})
		$(".allot-cancel").click(function(){
			 $(".allot-box").hide();
		})
	})
	
	$(".selectApplyfor").click(function(){
		$(".car-box").show();
		$(".car-close").click(function(){
			 $(".car-box").hide();
		})
		$(".car-cancel").click(function(){
			 $(".car-box").hide();
		})
	})
	
	//角色管理
	$(".editor").click(function(){
		$(".role-box").show();
		$(".role-close").click(function(){
			 $(".role-box").hide();
		})
		$(".role-cancel").click(function(){
			 $(".role-box").hide();
		})
	})
	//信息费用管理
	$(".recall").click(function(){
		$(".recall-box").show();
		$(".recall-close").click(function(){
			 $(".recall-box").hide();
		})
		$(".recall-cancel").click(function(){
			 $(".recall-box").hide();
		})
	})
	//黑名单IP管理
	$(".list").click(function(){
		$(".list-box").show();
		$(".list-close").click(function(){
			 $(".list-box").hide();
		})
		$(".list-cancel").click(function(){
			 $(".list-box").hide();
		})
	})
	//三率统计
	$(".count").click(function(){
		$(".count-box").show();
		$(".count-close").click(function(){
			 $(".count-box").hide();
		})
		$(".count-cancel").click(function(){
			 $(".count-box").hide();
		})
	})
	//平台商家推荐
	$(".seller1").click(function(){
		$(".seller-box").show();
		$(".seller-close").click(function(){
			 $(".seller-box").hide();
		})
		$(".seller-cancel").click(function(){
			 $(".seller-box").hide();
		})
	})
	//基础数据维护 禁止弹框 edit-data
	$(".prohibit").click(function(){
		$(".prohibit-box").show();
		$(".prohibit-close").click(function(){
			 $(".prohibit-box").hide();
		})
		$(".prohibit-cancel").click(function(){
			 $(".prohibit-box").hide();
		})
	})
	//基础数据维护 数据字典基础参数 添加 
	$(".add-data").click(function(){
		$(".add-box").show();
		$(".add-close").click(function(){
			 $(".add-box").hide();
		})
		$(".add-cancel").click(function(){
			 $(".add-box").hide();
		})
	})
	$(".add-data1").click(function(){
		$(".add-box1").show();
		$(".add-close").click(function(){
			$(".add-box1").hide();
		})
		$(".add-cancel").click(function(){
			$(".add-box1").hide();
		})
	})
	//基础数据维护 数据字典基础参数 编辑 edit-data
	$(".edit-data").click(function(){
		$(".edit-box").show();
		$(".edit-close").click(function(){
			 $(".add-box").hide();
		})
		$(".edit-cancel").click(function(){
			 $(".edit-box").hide();
		})
	})
	//查看数据字典基础参数  添加 
	$(".date-add").click(function(){
		$(".date-box").show();
		$(".date-close").click(function(){
			 $(".date-box").hide();
		})
		$(".date-cancel").click(function(){
			 $(".date-box").hide();
		})
	})
	$(".data-edit").click(function(){
		$(".date-box1").show();
		$(".date-close1").click(function(){
			 $(".date-box1").hide();
		})
		$(".date-cancel1").click(function(){
			 $(".date-box1").hide();
		})
	})
	//报价中心 报价 查看
	$(".price").click(function(){
		$(".price-box").show();
		$(".price-close").click(function(){
			 $(".price-box").hide();
		})
		$(".price-cancel").click(function(){
			 $(".price-box").hide();
		})
		
	})
	$(".query").click(function(){
		$(".query-box").show();
		$(".query-close").click(function(){
			 $(".query-box").hide();
		})
		$(".query-cancel").click(function(){
			 $(".query-box").hide();
		})
	})
	//竞拍中心  确认成交
	$(".deal").click(function(){
		$(".deal-box").show();
		$(".deal-close").click(function(){
			 $(".deal-box").hide();
		})
		$(".deal-cancel").click(function(){
			 $(".deal-box").hide();
		})
		
	})
	//车辆收藏夹  
	$(".collect").click(function(){
		$(".collect-box").show();
		$(".collect-close").click(function(){
			 $(".collect-box").hide();
		})
		$(".collect-cancel").click(function(){
			 $(".collect-box").hide();
		})
		
	})
	
	//信息费冲销  
	$(".car").click(function(){
		$(".role-box").show();
		$(".role-close").click(function(){
			 $(".role-box").hide();
		})
		$(".role-cancel").click(function(){
			 $(".role-box").hide();
		})
	})

	//子站用户管理修改密码
	$(".edit-pass").click(function(){
		$(".change-password").show();
		$(".lour-close").click(function(){
			$(".change-password").hide();
		})
		$(".button-cancel").click(function(){
			$(".change-password").hide();
		})
	})

	//询价中心查看
	$(".check1").click(function(){
		$(".xujia_check").show();
		$(".lour-close").click(function(){
			$(".xujia_check").hide();
		})
	})


	//保证金管理编辑
	$(".edit-table").click(function(){
		$(".layer_box").show();
		$(".four-bail").show();
		$(".lour-close").click(function(){
			$(".layer_box").hide();
		})
		$(".button-cancel").click(function(){
			$(".layer_box").hide();
		})
	})
	$(".edit-table1").click(function(){
		$(".layer_box1").show();
		$(".car-bail").show();
		$(".lour-close").click(function(){
			$(".layer_box1").hide();
		})
		$(".button-cancel").click(function(){
			$(".layer_box1").hide();
		})
	})
	
	
	//信息费冲销  
	$(".car").click(function(){
		$(".role-box").show();
		$(".role-close").click(function(){
			 $(".role-box").hide();
		})
		$(".role-cancel").click(function(){
			 $(".role-box").hide();
		})
	})
	//添加违约金
	$(".seller").click(function(){
		$(".seller-box").show();
		$(".seller-close").click(function(){
			 $(".seller-box").hide();
		})
		$(".seller-cancel").click(function(){
			 $(".seller-box").hide();
		})
	})
	
	$(".car").click(function(){
		$(".car-box").show();
		$(".car-close").click(function(){
			 $(".car-box").hide();
		})
		$(".car-cancel").click(function(){
			 $(".car-box").hide();
		})
	})
})

	
//	 function up_manage(){
//	 	 var width =(document.documentElement.clientWidth-360)/2;
//	 	 var height =(document.documentElement.clientHeight-160)/2;
//		 $(".up-manage ").css("top",height + "px").css("left",width + "px")
//		 $(".up-manage ").show();
//		 window.onresize = function(){
//			var width =(document.documentElement.clientWidth-360)/2;
//			var height =(document.documentElement.clientHeight-160)/2;
//			$(".up-manage ").css("top",height + "px").css("left",width + "px")
//		 }
//	 }
	 
	
	 
//	 function up_choice(){
//	 	 var width =(document.documentElement.clientWidth-600)/2;
//	 	 var height =(document.documentElement.clientHeight-160)/2;
//		 $(".up-choice ").css("top",height + "px").css("left",width + "px")
//		 $(".up-choice ").show();
//		 window.onresize = function(){
//			var width =(document.documentElement.clientWidth-360)/2;
//			var height =(document.documentElement.clientHeight-160)/2;
//			$(".up-choice ").css("top",height + "px").css("left",width + "px")
//		 }
//	 }
	 
 function newsector(){
 	var maskWidth  =$(document).width();
	 var maskHeight =$(document).height();
     $('.layer-bg').css({"width":maskWidth});
     $('.layer-bg').css({"height":maskHeight});
 	 var width =(document.documentElement.clientWidth-600)/2;
 	 var height =(document.documentElement.clientHeight-420)/2;
	 $(".new-sector").css("top",height + "px").css("left",width + "px")
	 $(".layer-bg").show();
	 $(".new-sector ").show();
	 window.onresize = function(){
		var width =(document.documentElement.clientWidth-600)/2;
		var height =(document.documentElement.clientHeight-420)/2;
		$(".new-sector ").css("top",height + "px").css("left",width + "px")
	 }
 }        
//部门管理


 function newjobs(){
 	var maskWidth  =$(window).width();
	 var maskHeight =$(document).height();
     $('.layer-bg').css({"width":maskWidth});
     $('.layer-bg').css({"height":maskHeight});
 	 var width =(document.documentElement.clientWidth-600)/2;
 	 var height =(document.documentElement.clientHeight-360)/2;
	 $(".new-jobs").css("top",height + "px").css("left",width + "px")
	 $(".layer-bg").show();
	 $(".new-jobs ").show();
	 window.onresize = function(){
		var width =(document.documentElement.clientWidth-600)/2;
		var height =(document.documentElement.clientHeight-360)/2;
		$(".new-jobs ").css("top",height + "px").css("left",width + "px")
	 }
}
//岗位管理 新增


function upedit(){
	var maskWidth  =$(window).width();
	 var maskHeight =$(document).height();
     $('.layer-bg').css({"width":maskWidth});
     $('.layer-bg').css({"height":maskHeight});
 	 var width =(document.documentElement.clientWidth-600)/2;
 	 var height =(document.documentElement.clientHeight-400)/2;
	 $(".up-person ").css("top",height + "px").css("left",width + "px")
	 $(".layer-bg").show();
	 $(".up-person ").show();
	 window.onresize = function(){
		var width =(document.documentElement.clientWidth-600)/2;
		var height =(document.documentElement.clientHeight-400)/2;
		$(".up-person ").css("top",height + "px").css("left",width + "px")
	 }
 }
//子站管理编辑
	 
 function newuser(){
 	var maskWidth  =$(window).width();
	 var maskHeight =$(document).height();
     $('.layer-bg').css({"width":maskWidth});
     $('.layer-bg').css({"height":maskHeight});
 	 var width =(document.documentElement.clientWidth-600)/2;
 	 var height =(document.documentElement.clientHeight-450)/2;
	 $(".user").css("top",height + "px").css("left",width + "px")
	 $(".layer-bg").show();
	 $(".user").show();
	 window.onresize = function(){
		var width =(document.documentElement.clientWidth-600)/2;
		var height =(document.documentElement.clientHeight-450)/2;
		$(".user ").css("top",height + "px").css("left",width + "px")
	 }
 }
 //添加子站用户

 
 function newpact(){
 	var maskWidth  =$(window).width();
	 var maskHeight =$(document).height();
     $('.layer-bg').css({"width":maskWidth});
     $('.layer-bg').css({"height":maskHeight});
 	 var width =(document.documentElement.clientWidth-860)/2;
 	 var height =(document.documentElement.clientHeight-500)/2;
	 $(".new-pact").css("top",	height + "px").css("left",width + "px")
	 $(".layer-bg").show();
	 $(".new-pact ").show();
	 window.onresize = function(){
		var width =(document.documentElement.clientWidth-860)/2;
		var height =(document.documentElement.clientHeight-500)/2;
		$(".new-pact ").css("top",height + "px").css("left",width + "px")
	 }
 }
 //添加保证金合同
 
 function choiceedit(){
	 var maskWidth  =$(window).width();
	 var maskHeight =$(document).height();
     $('.layer-bg').css({"width":maskWidth});
     $('.layer-bg').css({"height":maskHeight});
 	 var width =(document.documentElement.clientWidth-600)/2;
 	 var height =(document.documentElement.clientHeight-480)/2;
	 $(".choice-edit").css("top",height + "px").css("left",width + "px")
	 $(".layer-bg").show();
	 $(".choice-edit ").show();
	 window.onresize = function(){
		var width =(document.documentElement.clientWidth-600)/2;
		var height =(document.documentElement.clientHeight-480)/2;
		$(".choice-edit ").css("top",height + "px").css("left",width + "px")
	 }
 }
 //编辑区域拍卖中心
 
 function fourbail(){

 	 var maskWidth  =$(window).width();
	 var maskHeight =$(document).height();
     $('.layer-bg').css({"width":maskWidth});
     $('.layer-bg').css({"height":maskHeight});
 	 var width =(document.documentElement.clientWidth-860)/2;
 	 var height =(document.documentElement.clientHeight-410)/2;
	 $(".four-bail").css("top",	height + "px").css("left",width + "px")
	 $(".layer-bg").show();
	 $(".four-bail").show();
	 window.onresize = function(){
		var width =(document.documentElement.clientWidth-860)/2;
		var height =(document.documentElement.clientHeight-410)/2;
		$(".four-bail ").css("top",height + "px").css("left",width + "px")
	 }
 }
  //4s添加保证金
  
  
function carbail(){
	var maskWidth  =$(window).width();
	 var maskHeight =$(document).height();
	 
     $('.layer-bg').css({"width":maskWidth});
     $('.layer-bg').css({"height":maskHeight});
 	 var width =(document.documentElement.clientWidth-860)/2;
 	 var height =(document.documentElement.clientHeight-410)/2;
	 $(".car-bail").css("top",	height + "px").css("left",width + "px")
	 $(".layer-bg").show();
	 $(".car-bail").show();
	 window.onresize = function(){
		var width =(document.documentElement.clientWidth-860)/2;
		var height =(document.documentElement.clientHeight-410)/2;
		$(".car-bail").css("top",height + "px").css("left",width + "px")
	 }
 }
  //车商添加保证金