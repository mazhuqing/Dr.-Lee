// // 选择语言
// $(function(){
// 	$(".top-language-choice a").mouseenter(function(){
// 		$(this).css({color:"#1f82c3"});
// 		$(".top-language-switch").show();
// 		$(".english").css({color:"",textDecoration:""});
// 		$(".chinese").css({color:"",textDecoration:""});
// 	}).mouseleave(function(){
// 		$(this).css({color:""});
// 	});
// 	
// 	$(".top-language-switch").mouseenter(function(){
// 		$(".english").mouseenter(function(){
// 			$(".chinese").css({color:"",textDecoration:""});
// 			$(this).css({color:"#1f82c3",textDecoration:"underline"});
// 			
// 		}).click(function(){$(".top-language-switch").hide(),$(".english").css({color:"",textDecoration:""})});
// 		
// 		$(".chinese").mouseenter(function(){
// 			
// 			$(".english").css({color:"",textDecoration:""});
// 			
// 			$(this).css({color:"#1f82c3",textDecoration:"underline"});
// 			
// 		}).click(function(){$(".top-language-switch").hide(),$(".chinese").css({color:"",textDecoration:""})});
// 	}).mouseleave(function(){
// 		$(".top-language-switch").hide();
// 	});	
// });
// 
// //---------------------------------------------------------------------------------
// 
// //注册/登录
// 	$(".icon-zc").hover(function(){
// 		$(".top-language-switch").hide();
// 		$(this).css({color:"#1f82c3"});
// 	},function(){
// 		$(this).css({color:""});
// 	});
// 	
// //购物车
// 	$(".icon-gwc").hover(function(){
// 		$(this).css({color:"#1f82c3"});
// 	},function(){
// 		$(this).css({color:""});
// 	});
// 	
// //搜索
// 	$(".icon-ss").hover(function(){
// 		$(this).css({color:"#1f82c3"});
// 	},function(){
// 		$(this).css({color:""});
// 	});
// 	
// 	
// // -------------------------------------------------------------------------------------------
// 
// // 菜单栏首页
// $(function(){
// 
// $(".nav-page1").mouseover(function(){
// 			$(this).css({color:"#1f82c3"});
// 			$(".lis1").css({display:"block"});
// 			$(".lis5").css({display:"none"});
// 			$(".lis2").css({display:"none"});
// 		})
// 		$(".nav-page1").mouseout(function(){
// 			$(this).css({color:"#808285"});
// 			$(".lis1").css({display:"none"});
// 		})
// 		
// //产品展示	
// 		$(".nav-page2").hover(function(){
// 			$(this).css({color:"#1f82c3"});
// 			$(".top-pro").show();
// 			//小三角图片有问题
// 			 $(".lis2").css({display:"block"});
// 			 $(".lis1").css({display:"none"});
// 			 $(".lis3").css({display:"none"});
// 		},function(){
// 			$(".nav-page2").css({color:"",textDecoration:""});
// 		});
// 		
// 		$(".top-pro").mouseleave(function(){
// 			$(".top-pro").hide();
// 			//小三角图片有问题
// 			 $(".lis2").css({display:"none"});
// 		});
// 
// 		
// //产品展示下拉菜单
// 		//产品系列
// 		$(".top-pro1").find("a").hover(function(){
// 			$(this).css({color:"#1f82c3",textDecoration:"underline"});
// 		},function(){
// 			$(this).css({color:"",textDecoration:""});
// 		});
// 		
// 		
// 		$(".top-pro1").find(".dt1").hover(function(){
// 			$(this).css({color:"#5362a6",textDecoration:"underline"});
// 		},function(){
// 			$(this).css({color:"",textDecoration:""});
// 		});
// 		
// 		
// 		//功能分类
// 		$(".top-pro2").find("a").hover(function(){
// 			$(this).css({color:"#1f82c3",textDecoration:"underline"});
// 		},function(){
// 			$(this).css({color:"",textDecoration:""});
// 		});
// 		
// 		
// 		$(".top-pro2").find(".dt2").hover(function(){
// 			$(this).css({color:"#f791cd",textDecoration:"underline"});
// 		},function(){
// 			$(this).css({color:"",textDecoration:""});
// 		});
// 		
// 		
// 		//肌肤分类
// 		$(".top-pro3").find("a").hover(function(){
// 			$(this).css({color:"#1f82c3",textDecoration:"underline"});
// 		},function(){
// 			$(this).css({color:"",textDecoration:""});
// 		});
// 		
// 		
// 		$(".top-pro3").find(".dt3").hover(function(){
// 			$(this).css({color:"#8ebe3f",textDecoration:"underline"});
// 		},function(){
// 			$(this).css({color:"",textDecoration:""});
// 		});
// 		
// //美时美刻	
// 		$(".nav-page3").mouseover(function(){
// 					$(this).css({color:"#1f82c3"});
// 					 $(".lis3").css({display:"block"});
// 					 $(".lis2").css({display:"none"});
// 					 $(".lis4").css({display:"none"});
// 				})
// 				$(".nav-page3").mouseout(function(){
// 					$(this).css({color:"#808285"});
// 					$(".lis3").css({display:"none"});
// 				})
// //达人分享		
// 
// $(".nav-page4").mouseover(function(){
// 			$(this).css({color:"#1f82c3"});
// 		    $(".lis4").css({display:"block"});
// 			 $(".lis5").css({display:"none"});
// 		})
// 		$(".nav-page4").mouseout(function(){
// 			$(this).css({color:"#808285"});
// 			$(".lis4").css({display:"none"});
// 		})
// //关于我们		
// 
// $(".nav-page5").mouseover(function(){
// 			$(this).css({color:"#1f82c3"});
// 			$(".nav-page-our").show();
// 			$(".lis5").css({display:"block"});
// 		})
// 		$(".nav-page5").mouseout(function(){
// 			$(this).css({color:"#808285"});
// 		})
// 		
// 		
// 		$(".nav-page-our").mouseenter(function(){
// 			//品牌介绍
// 			$(".nav-page-li1").mouseenter(function(){
// 				$(this).css({color:"#1f82c3",textDecoration:"underline"});
// 				$(".nav-page-li2").css({color:"",textDecoration:""});
// 				$(".nav-page-li3").css({color:"",textDecoration:""});
// 			}).click(function(){$(".top-language-switch").hide()});
// 			
// 			//媒体信息
// 			$(".nav-page-li2").mouseenter(function(){
// 				$(".nav-page-li1").css({color:"",textDecoration:""});
// 				$(".nav-page-li3").css({color:"",textDecoration:""});
// 				$(this).css({color:"#1f82c3",textDecoration:"underline"});
// 			}).click(function(){$(".top-language-switch").hide()});
// 			
// 			//人才招聘
// 			$(".nav-page-li3").mouseenter(function(){
// 				$(".nav-page-li1").css({color:"",textDecoration:""});
// 				$(".nav-page-li2").css({color:"",textDecoration:""});
// 				$(this).css({color:"#1f82c3",textDecoration:"underline"});
// 			}).click(function(){$(".top-language-switch").hide()});
// 		
// 		}).mouseleave(function(){
// 			$(".nav-page-li1").css({color:"",textDecoration:""});
// 			$(".nav-page-li2").css({color:"",textDecoration:""});
// 			$(".nav-page-li3").css({color:"",textDecoration:""});
// 			$(".nav-page-our").hide();
// 			//小三角图片有问题
// 			 $(".lis5").css({display:"none"});
// 		});	
// 	});
// 
// ---------------------------------------------------------------------------

// 轮播图
class Banner {
		
	constructor(obj) {
		this.btnLeft = obj.btnLeft;
		this.btnRight = obj.btnRight;
		this.oLi = obj.oLi;
		this.box = obj.box;
		this.index = 0;
		this.time = null;
	}
	// 自动播放
	autoPlay() {
		
		this.time = setInterval(() => {
			this.index++;
			// 临界
			if (this.index > this.oLi.length - 1) {
				this.index = 0;
			}
			this.box.css({
				'background': `url(./img/${this.index}.jpg)center center no-repeat`
			})
			
			this.oLi.removeClass('active');
			
			this.oLi.eq(this.index).addClass('active');
			
		}, 2000)

	}
	// 事件方法
	bindEvent() {
		// 点击左按钮
		this.btnLeft.click(() => {
			
			clearInterval(that.time)

			this.index--;
			// 临界
			if (this.index < 0) {
				this.index = this.oLi.length - 1;
			}
			// 切换背景图
			this.box.css({
				'background': `url(./img/${this.index}.jpg)center center no-repeat`
			})
			// 切换豆豆
			this.oLi.removeClass('active');
			// 干自己的事addClass()
			this.oLi.eq(this.index).addClass('active');
		})
		
		// 点击右按钮
		this.btnRight.click(() => {
			
			clearInterval(that.time)

			this.index++;
			// 临界
			if (this.index > this.oLi.length - 1) {
				this.index = 0;
			}
			// 切换背景图
			this.box.css({
				'background': `url(./img/${this.index}.jpg)center center no-repeat`,
				
			})
			// 切换豆豆
			this.oLi.removeClass('active');
			// 干自己的事addClass()
			this.oLi.eq(this.index).addClass('active');
		})
		// 点击小红点
		// this.oLi
		let that = this;
		this.oLi.click(function () {
			let ord = $(this).index();
			console.log(ord);
			// 改变背景图
			that.box.css({
				'background': `url(./img/${ord}.jpg)center center no-repeat`,
			})
			// 改变豆豆
			that.oLi.removeClass('active');
			$(this).addClass('active');
		})
		
		// 鼠标悬停
		this.box.mouseover(function () {
			clearInterval(that.time);
		})
		this.box.mouseout(function () {
			that.autoPlay();
		})
	}
}


// ---------------------------------------------------------------------------------------------
	
	
	// 视频
	$('.container-video1').each(function(){ //遍历视频列表
		$(this).hover(function(){ //鼠标移上来后显示播放按钮
			$(this).find('.videoed').show();
		},function(){
			$(this).find('.videoed').hide();
		});
});
	$('.container-video2').each(function(){ //遍历视频列表
			$(this).hover(function(){ //鼠标移上来后显示播放按钮
				$(this).find('.videoed').show();
			},function(){
				$(this).find('.videoed').hide();
			});
	});
	
	// --------------------------------------------------------------------------------------
	
// 	// 电子邮箱
// 	$(".consulting_c a").hover(function(){
// 		$(this).css({color:"#23527c",textDecoration:"underline"})
// 	},function(){
// 		$(this).css({color:"",textDecoration:""})
// 	});
// 	
// 	//----------------------------------------------------------------------------------
// 	
// 	//常见问题
// 	$(".box3-two a").hover(function(){
// 		$(this).css({color:"#ebff00",textDecoration:"underline"})
// 	},function(){
// 		$(this).css({color:"",textDecoration:""})
// 	});
// 	
// 	//媒体信息
// 	$(".box3-three a").hover(function(){
// 		$(this).css({color:"#ebff00",textDecoration:"underline"})
// 	},function(){
// 		$(this).css({color:"",textDecoration:""})
// 	});
// 	
// 	//购物指南
// 	$(".box3-four a").hover(function(){
// 		$(this).css({color:"#ebff00",textDecoration:"underline"})
// 	},function(){
// 		$(this).css({color:"",textDecoration:""})
// 	});
// 	
// 	//----------------------------------------------------------------------------------
// 	
// 	//置顶
// 	window.onscroll=function(){
// 		// console.log($(window).scrollTop());
// 	}
// 	$(".box3-img a").click(function(){
// 		$(window).scrollTop(0);
// 	});