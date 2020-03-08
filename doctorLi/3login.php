<?php
	header("Content-type:text/html;charset=utf-8");
	$email = $_POST["email"];
	$pwd = $_POST["pwd"];
	
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		// echo "连接成功";
		mysql_select_db("doctor");
	}else{
		echo "连接失败!";
	}

	$result = mysql_query("select * from doctor where email='$email'");
	$row = mysql_num_rows($result);
	if($row == 1){
		echo "1";
	}else{
		echo "0";
	}
	// mysql_close($conn);
?>