<?php 
// contact.php

// Set the content type to JSON
header("Content-Type: application/json");

// Allow cross-origin requests
header("Access-Control-Allow-Origin: *"); // Change '*' to your frontend domain in production
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Get the POST data from the request
$data = json_decode(file_get_contents("php://input"), true);

// Initialize an array to hold the response
$response = [];

// Validate the input data
if (isset($data['name']) && isset($data['email']) && isset($data['phone']) && isset($data['message'])) {
    $name = strip_tags(trim($data['name']));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($data['phone']));
    $product = strip_tags(trim($data['product'] ?? ''));
    $message = strip_tags(trim($data['message']));

    // Check if the email is valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['status'] = 'error';
        $response['message'] = 'Invalid email format.';
        echo json_encode($response);
        exit;
    }

    // Compose the  
    $to = "info@fortunaenterprise.in"; // Replace with your email address
    $subject = "New Contact Form Submission from $name";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Product: $product\n";
    $body .= "Message: $message\n";

    // Send the email
    if (mail($to, $subject, $body)) {
        $response['status'] = 'success';
        $response['message'] = 'Your message has been sent successfully.';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Unable to send email. Please try again later.';
        
        // Log the error for debugging
        error_log("Failed to send email to $to", 0); // Logs to the server's error log
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Please fill out all required fields.';
}

// Send the response back as JSON
echo json_encode($response);
?>
