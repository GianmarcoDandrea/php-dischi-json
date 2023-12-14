<?php

$json = file_get_contents("dischi.json");

$id = $_GET['id'] ?? null;

if ($id) {
    $list = json_decode($json, true);    
    $json = json_encode($list[$id]);
}

header("Content-Type: application/json");
echo $json;
?>