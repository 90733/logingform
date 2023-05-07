<?php
// Set database credentials
header("Access-Control-Allow-origin");
$host = "localhost";
$user = "root";
$password = "";
$dbname = "user_login";

// Create connection
$conn = mysqli_connect($host, $user, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if (mysqli_query($conn, $sql)) {
    echo "Database created successfully\n";
}

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        $email = $_POST["email"];
        $password = $_POST["password"];
        $sql = "INSERT INTO servername (email, password) VALUES ('$email', '$password')";
        break;
}

$result = mysqli_query($conn, $sql);
if (!$result) {
    http_response_code(404);
    die(mysqli_error($conn));
}

if ($method == 'POST') {
    echo json_encode($result);
} else {
    echo mysqli_affected_rows($conn);
}

$conn->close();
