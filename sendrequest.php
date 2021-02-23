<?php 

if(isset($_POST['submit'])){

$to = "zakaz@uventa-stroy.ru";  
$from = "no-reply@uventa-stroy.ru";
 
$first_name = $_POST['first_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$subject = "Заявка с сайта на расчет проекта";
     
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}
     
$mail_to_myemail = "
Поступила заявка на расчет проекта! 

Имя отправителя: $first_name
E-mail: $email  
Телефон: $phone
Текст сообщения: $message ";    
$headers = "From: $from \r\n";
     
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
echo "<style>
p {
color: firebrick;
display: flex;
justify-content: center;
margin-top: 5%;
font-size: 18px;
}
</style>
<p class='link'> Запрос отправлен. " . $first_name . ", мы скоро свяжемся с вами!</p>";
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';
echo "<br /><br />
<style>
a {
display: flex;
justify-content: center;
font-size: 17px;
}
</style>
<a class='link' href='$redirect'>Вернуться на сайт.</a>";
}
?>
