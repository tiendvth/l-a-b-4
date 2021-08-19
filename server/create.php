<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'demo_php_basic';
$conn = new mysqli($host,$user,$password,$database);
header('Access-Control-Allow-Origin: *');
$name = $_POST['name'];
$price = $_POST['price'];
$thumbnail = $_POST['thumbnail'];
$sql = 'INSERT INTO products (name , price , thumbnail) values ( "' . $name . '" , ' . $price . ' , "' . $thumbnail . '" )';
if ($conn->query($sql)) {
    print '{
        code:201,
        message:"Create product success"
    }';
} else {
    print '{
        code:400,
        message:"Create product false"
    }';
}