<?php

$ftp_hostname = '127.0.0.1'; // change this
$ftp_username = 'Simon'; // change this
$ftp_password = 'kinder'; // change this
$remote_dir = '/bilder/'; // change this
$src_file = $_FILES['srcfile']['name'];
fopen($src_file,"w");



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
    if (ftp_put($ftpcon, $dst_file, $src_file, FTP_BINARY)){
        echo 'File uploaded successfully to FTP server!';
    }
    else
        echo 'Error uploading file! Please try again later.';
    
    // close ftp stream
    ftp_close($ftpcon);
}
else
    header('Location: index.php');





?>