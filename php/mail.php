<?php 
	$adminEmail = "test@mail.ru";
	$adminSubject = "Новый заказ";
	$adminMail = 
	"<p>На сайте Home-fit был совершон новый заказ:</p>
	<h2>Данные покупателя:</h2>
	<p>
		Имя:" . $_POST['name'] . "<br> 	
		Телефон:" . $_POST['phone'] . "<br> 	
		E-mail:" . $_POST['email'] ." <br> 	
		Крюки:" . $_POST['hooks'] ." <br> 	
		Петли:" . $_POST['loops'] ."  	
	</p>";

	$headers = "MINE-Version: 1.0\r\n";								
	$headers = "Content-type: text/html; charset=iso-8859-1\r\n";		

	mail($adminEmail, $adminSubject, $adminMail, $headers);

	$userEmail = $_POST['email'];
	$userSubject = "Ваш заказ успешно получен";
	$userMail = "<h2>Спасибо за заказ! Скоро мы свяжемся с вами.</h2>";

	mail($userEmail, $userSubject, $userMail, $headers);

?>