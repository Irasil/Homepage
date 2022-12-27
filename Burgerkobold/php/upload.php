<?php
$target_dir = "..\uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
$src_file = $target_file;
$src_file_name = $_FILES['fileToUpload']['name'];
$ftp_hostname = '127.0.0.1'; // change this
$ftp_username = 'Simon'; // change this
$ftp_password = 'kinder'; // change this
$remote_dir = '/bilder/'; // change this

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    header('Location: ..\Links/schief.html');
    $uploadOk = 1;
  } else {
    header('Location: ..\Links/schief.html');
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  header('Location: ..\Links/schief.html');
  $uploadOk = 0;
  
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  header('Location: ..\Links/schief.html');
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  header('Location: ..\Links/schief.html');
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  header('Location: ..\Links/schief.html');
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
   
   
    if ($src_file!='')

{

    echo ('<script>console.log("Hey")</script>');
    // remote file path
    $dst_file = $remote_dir . $src_file_name ;
    
    // connect ftp
    $ftpcon = ftp_connect($ftp_hostname) or die('Error connecting to ftp server...');
    
    // ftp login
    $ftplogin = ftp_login($ftpcon, $ftp_username, $ftp_password);
    
    // ftp upload
    if (ftp_put($ftpcon, $dst_file, $src_file, FTP_BINARY)){
      header('Location: ..\Links/upload.html');
    }
    else
        echo 'Error uploading file! Please try again later.';
    
    // close ftp stream
    ftp_close($ftpcon);
}
else
    header('Location: ..\Links/upload.html');
    
  } else {
    header('Location: ..\Links/schief.html');
  }
}
?>
