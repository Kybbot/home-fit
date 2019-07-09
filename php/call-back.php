<?php 

	$adminEmail = "test@mail.ru";
	$adminSubject = "Новый заказ";
	$adminMail = 
	"<p>На сайте Home-fit заказали звонок:</p>
	<h2>Данные клиента:</h2>
	<p>
		Имя:" . $_POST['name'] . "<br> 	
		Телефон:" . $_POST['phone'] . "<br> 	 	
	</p>";

	$headers = "MINE-Version: 1.0\r\n";								
	$headers = "Content-type: text/html; charset=iso-8859-1\r\n";		

	mail($adminEmail, $adminSubject, $adminMail, $headers);

?>