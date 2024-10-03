<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$receiving_email_address = 'imranhshakil69@gmail.com';

if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
} else {
    die(json_encode(['success' => false, 'errors' => ['Unable to load the "PHP Email Form" Library!']]));
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

$errors = [];

$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$subject = filter_var(trim($_POST['subject']), FILTER_SANITIZE_STRING);
$message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

if (empty($name)) {
    $errors[] = 'Name is required.';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email is required.';
}
if (empty($subject)) {
    $errors[] = 'Subject is required.';
}
if (empty($message)) {
    $errors[] = 'Message cannot be empty.';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

$contact->to = $receiving_email_address;
$contact->from_name = $name;
$contact->from_email = $email;
$contact->subject = $subject;

$contact->add_message($name, 'From');
$contact->add_message($email, 'Email');
$contact->add_message($message, 'Message', 10);

if ($contact->send()) {
    echo json_encode(['success' => true, 'message' => 'Your message has been sent. Thank you!']);
} else {
    echo json_encode(['success' => false, 'errors' => ['Failed to send the email.']]);
}
?>
