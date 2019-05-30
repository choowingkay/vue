$(function(){
	$(".question-box").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).find("ul").hide();
		}else{
			$(this).addClass("on");
			$(this).find("ul").show();
		}
	})
	$(".question-box ul").click(function(e){
		e.stopPropagation();
	})
	$(".nav-bar").click(function(e){
		e.stopPropagation();
	});
})
