<?php
include 'db_config.php';

$username = $_POST['username'];
$password = $_POST['password'];

// Query to check if user has already entered the quiz
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password' AND has_entered=0";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // Update the has_entered flag to TRUE
  $update_sql = "UPDATE users SET has_entered=1 WHERE username='$username'";
  $conn->query($update_sql);

  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'error' => 'Você já inseriu o questionário ou credenciais inválidas.']);
}

$conn->close();
?>