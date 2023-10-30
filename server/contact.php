<?php
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require __DIR__ . '/cors.php';

$body = file_get_contents('php://input');
$params = json_decode($body);

if (!property_exists($params, 'name') || empty($params->name)) {
    http_response_code(404);
    echo 'Name is required';
}
if (!property_exists($params, 'email') || empty($params->email)) {
    http_response_code(404);
    echo 'Email is required';
}
if (!property_exists($params, 'message') || empty($params->message)) {
    http_response_code(404);
    echo 'Message is required';
}



$email = new \SendGrid\Mail\Mail();
$email->setFrom("postmaster@marcusvinicius.info", "Postmaster");
$email->setSubject("Email contact from marcusvinicius.info");
$email->addTo("marcus@marcusvinicius.info", "Marcus V. Ximenes");
$email->addContent("text/plain", $params->message);
$email->addContent("text/html", $params->message);
$sendgrid = new \SendGrid($_ENV['SENDGRID_API_KEY']);
try {
    $response = $sendgrid->send($email);
    http_response_code($response->statusCode());
} catch (Exception $e) {
    echo 'Caught exception: ' . $e->getMessage() . "\n";
}
