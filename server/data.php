<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'demo_php_basic';
$conn = new mysqli($host,$user,$password,$database);
header('Access-Control-Allow-Origin: *');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = 'SELECT * FROM products ORDER BY id DESC';
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $currencyArray = array();
    while($row = $result->fetch_assoc()) {
        $currency = array($row["id"], $row["name"], $row["price"],$row["thumbnail"]);
        $currencyArray[] = $currency;
    }
    print json_encode($currencyArray);
} else {
    echo "0 results";
}
$conn->close();

