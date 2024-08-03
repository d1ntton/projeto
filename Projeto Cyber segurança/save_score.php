<?php
include 'db_config.php';

$username = $_POST['username'];
$score = $_POST['score'];

// Query para salvar a pontuação
$sql = "INSERT INTO scores (username, score) VALUES ('$username', '$score')";
if ($conn->query($sql) === TRUE) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'error' => $conn->error]);
}

$conn->close();
?>
