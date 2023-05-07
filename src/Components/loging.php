<?php
// Set up database connection parameters
$host = "localhost";
$user = "root";
$password = "password";
$dbname = "mydatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get login data from request body
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];

// Check login credentials in database
$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // Login successful
  $response = array('success' => true, 'message' => 'Login successful');
  echo json_encode($response);
} else {
  // Login failed
  $response = array('success' => false, 'message' => 'Incorrect email or password');
  echo json_encode($response);
}

// Close database connection
$conn->close();
?>
