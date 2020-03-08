    let name = false; // 用户名
	let email = false; // 邮箱
	let pwd1 = false; // 密码
	let pwd2 = false; // 密码
	let check = false; 

function checkInp(ele, reg, msg) {
		var msgInp = ele.parentNode.parentNode.lastElementChild;
		if (reg.test(ele.value)) { // 符合
			// alert("正确");
			changeSatus(msg, true);
		} else {
			alert(msg + '格式错误');
			changeSatus(msg, false);
		}
	}


 // 检查密码
	function checkPwd1(ele, msg) {
		var msgInp = ele.parentNode.parentNode.lastElementChild;
		var str = ele.value;
		//纯数字
		let regNum = /^\d+$/;
		//纯字母
		let regLetter = /^[a-zA-Z]+$/;
		//纯其他字符
		let regChar = /^[!@#$]+$/;

		let _regNum = /\d+/;
		let _regLetter = /[a-zA-Z]+/;
		let _regChar = /[!@#$]+/;
		if (str.length >= 6 && str.length <= 20) { // 符合
			pwd1 = true;
			if (regNum.test(str) == true || regLetter.test(str) == true || regChar.test(str) == true) {
				// alert("弱") ;
			} else if (_regNum.test(str) == true && _regLetter.test(str) == true && _regChar.test(str) == true) {
				// alert("强") ;
			} else {
				// alert("中") ;
			}
		} else {
			alert("格式错误") ;
			pwd1 = false;
		}
	}
	// 判断密码是否相同
	function checkPwd2(ele) {
		var msgInp = ele.parentNode.parentNode.lastElementChild;
		var pd1 = document.getElementById('pwd');
		if (ele.value == pd1.value) {
			pwd2 = true;
		} else {
			alert("输入密码不一致,请重新输入") ;
			pwd2 = false;
		}

	}
	
	function changeSatus(msg, flag) {
		switch (msg) {
			case '用户名':
				name = flag;
				break;
			case '邮箱':
				email = flag;
				break;
		}
	}
	
// 	var myForm = document.getElementById('myForm');
// 	// 表单提交
// 	myForm.onsubmit = function () {
// 		check = checkRadio();
// 		if (name && pwd1 && pwd2 && email && check) {
// 			return true;
// 		}
// 		return false;
// 	}
// 	// 判断接受协议是否选中
// 	function checkRadio() {
// 		var radioBox = document.getElementsByClassName('check');
// 			if (radioBox.checked) {
// 				return check = true;
// 			}
// 		      return check = false;
// 	}
	
	$(".btn-primary").click(function(){
		if (name && pwd1 && pwd2 && email){
			console.log(111);
			let xhr = new XMLHttpRequest();
			xhr.open("post","3register.php",true);
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xhr.onreadystatechange=function(){
				console.log(33333);

				if(xhr.readyState == 4 && xhr.status == 200){
					console.log(2222);
					if(xhr.responseText == 1){
						alert("用户名已被注册");
					}else if(xhr.responseText == 0){
						alert("恭喜你注册成功");
						location.href="3login.html";
					}
				}
			}
			xhr.send("email="+$('#email1').val()+"&pwd="+$('#password1').val());
		}
	});
	
	


