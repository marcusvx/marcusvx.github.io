<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    if ($_ENV['ENVIRONMENT'] === 'DEV') {
        header('Access-Control-Allow-Origin: *');
    }

    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Content-Type: text/plain');
    die();
}

if ($_ENV['ENVIRONMENT'] === 'DEV') {
    header('Access-Control-Allow-Origin: *');
}
header('Content-Type: application/json');
