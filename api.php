<?php
$data = json_decode(file_get_contents('php://input'), true);

if(empty($data['message'])) {
    echo json_encode(['message' => 'Invalid message']);
}

echo json_encode(['message' => htmlspecialchars(ucfirst($data['message']))]);