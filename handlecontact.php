<?php
	$subject = addslashes(trim($_POST['subject']));
	$email = addslashes(trim($_POST['email']));
	$message = addslashes(trim($_POST['message']));

	$HOSTNAME = 'localhost';
	$USERNAME = 'root';
	$PASSWD = 'xiayf';
	$DATABASE = 'loven';

	$mysqli = new mysqli($HOSTNAME, $USERNAME, $PASSWD, $DATABASE);
	$mysqli->query("SET NAMES 'UTF8'");
	if(mysqli_connect_errno())
	{
		readfile("feedback-failed.html");
		exit;
	}

	$query = "INSERT INTO contactme(subject, email, message)VALUES('".$subject."', '".$email."','".$message."')";
	if(! $mysqli->query($query)){
		readfile("feedback-failed.html");
	}
	else{
		readfile("feedback-success.html");
	}
?>