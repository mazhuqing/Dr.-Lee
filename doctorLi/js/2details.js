// 详情页
	// 放大镜
	//鼠标放上时的情况
	$(".small-box").mouseover(function(){
		$(".mask").css({display:"block"});
		$(".big-box").css({display:"block"});
	});
	//鼠标离开时的情况
	$(".small-box").mouseout(function(){
		$(".mask").css({display:"none"});
		$(".big-box").css({display:"none"});
	});
	//鼠标移动时情况
	$(".small-box").mousemove(function(e) {
		let left = e.pageX - $(this).offset().left - ($(".mask").width()/2);
		let top = e.pageY - $(this).offset().top - ($(".mask").height()/2);
		if(left < 0){
			left = 0;
		}
		
		//判断边界
		let maxLeft	= $(this).width() - $(".mask").width();
		if(left > maxLeft){
			left = maxLeft
		}
		if(top < 0){
			top = 0;
		}
		
		let maxTop = $(this).height() - $(".mask").height();
		if(top > maxTop){
			top = maxTop;
		}
		
		let x = left * $(".big-box").width() / $(".mask").width();
		let y = top * $(".big-box").height() / $(".mask").height();
		$(".mask").css({left:left+"px",top:top+"px"});
		$(".big-box").css({"background-position-x":"-" +(x)+ "px","background-position-y":"-" +(y)+ "px"});
	});