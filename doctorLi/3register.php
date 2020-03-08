<?php
	header("Content-type:text/html;charset=utf-8");
	$email = $_POST["email"];
	$pwd = $_POST["pwd"];
	
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		
		mysql_select_db("doctor");
	}else{
		echo "连接失败!";
	}

	$result = mysql_query("select * from doctor where email='$email' AND pwd='$pwd'");
	$row = mysql_num_rows($result);
	if($row == 1){
		echo "1";
	}else{
		echo "0";
		mysql_query("insert into doctor values('$email','$pwd')",$conn);
	}
	// mysql_close($conn);
?>