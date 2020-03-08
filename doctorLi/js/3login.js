	 $(".btn-nob").hover(function(){
			 $(this).css({backgroundColor:"#265a88"});
	},function(){
			 $(this).css({backgroundColor:""});
	});
	
	$(".found").hover(function(){
			 $(this).css({backgroundColor:"#c12e2a"});
	},function(){
			 $(this).css({backgroundColor:""});
	});
		
	$(".btn-nob").click(function(){
		let xhr = new XMLHttpRequest;
		xhr.open("post","3login.php",true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange=function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				if(xhr.responseText == 1){
					location.href="1homePage.html";
				}else if(xhr.responseText == 0){
					alert("请查之后再确认")
				}
			}
		}
		xhr.send("email="+$('.form-email').val()+"&pwd="+$('.form-pwd').val());
	});
	
		
	
		
