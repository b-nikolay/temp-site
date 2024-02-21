<?php
    $email = $_POST['email']; 
    $persons  = $_POST['persons ']; 
    $date = $_POST['date']; 
    $send = "Email: ".$email." Persons: ".$persons ." Date: ".$date;
     
     
    $to= "mymail@mail.com"; //Ваша почта
    $from = "no-replay@mail.com"; //Можно название сайта через @ или почту 
    $subject = "Application from the site"; 
    $headers = "From: $from\r\nReplay-To: $from\r\nContent-type: text/plain; charset=utf-8\r\n";
    mail($to, $subject, $send, $headers);
 
    $redir = $_SERVER['HTTP_REFERER'];
     
?>