<?php

    $data_file = fopen("cv/user.txt", "a");
    
    $uname = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

  
    $text_to_write = $uname . " \n" . $email . "\n" . $subject . "\n" . $message . "\n". "\n" ;

    fwrite($data_file, $text_to_write);

    fclose($data_file);

    header("Location: index.html");
?>