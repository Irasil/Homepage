<?php    
    $data_file = fopen("comments.txt", "a");


    $fname = $_POST["fname"];
    $email = $_POST["email"]; 
    $comment = $_POST["comment"];
    $radio = $_POST["radio"];
    $text_to_write = "Name: " . $fname . "\n" ."E-Mail: " . $email. " \n" . "Kommentar: "."\n" . $comment . "\n". "\n";

    fwrite($data_file, $text_to_write);

    fclose($data_file);



    
    $ftp_hostname = '127.0.0.1'; // change this
    $ftp_username = 'Simon'; // change this
    $ftp_password = '******'; // change this
    $remote_dir = '/comments/'; // change this
    $src_file = "comments.txt";
    fopen("comments.txt","a");

    

    echo ('<script>console.log("Hallo")</script>');

    //upload file
    if ($src_file!='')

    {   

        echo ('<script>console.log("Hey")</script>');
        // remote file path
        $dst_file = $remote_dir . $src_file ;
        
        // connect ftp
        $ftpcon = ftp_connect($ftp_hostname) or die('Error connecting to ftp server...');
        
        // ftp login
        $ftplogin = ftp_login($ftpcon, $ftp_username, $ftp_password);
        
        // ftp upload
        if (ftp_append($ftpcon, $dst_file, $src_file, FTP_BINARY)){
            header("Location: Links/danke.html");
            unlink($src_file);}
        else
            echo 'Error uploading file! Please try again later.';
        
        // close ftp stream
        ftp_close($ftpcon);
    }
    else
        header('Location: index.html');




?>