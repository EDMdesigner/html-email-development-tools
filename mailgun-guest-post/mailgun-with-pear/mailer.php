<?php
    # Include dependency
    require_once "Mail.php";

    # Provide input variables
    $host = "smtp.mailgun.org";
    $username = "postmaster@sandbox21a78f82...60ebc79.mailgun.org";
    $password = "75b958...417c80133";
    $port = "587";
    $to = "recipient@address.com";

    $email_from = "example@edmdesigner.com";
    $email_subject = "Example subject line" ;
    $email_body = "This is the email message body" ;
    $email_address = "replyto@edmdesigner.com";
    $content = "text/html; charset=utf-8";
    $mime = "1.0";

    $headers = array ('From' => $email_from,
                    'To' => $to,
                    'Subject' => $email_subject,
                    'Reply-To' => $email_address,
                    'MIME-Version' => $mime,
                    'Content-type' => $content);

    $params = array  ('host' => $host,
                    'port' => $port,
                    'auth' => true,
                    'username' => $username,
                    'password' => $password);

    # Instantiate the client
    $smtp = Mail::factory ('smtp', $params);

    # Make the call to the client
    $mail = $smtp->send($to, $headers, $email_body);

    if (PEAR::isError($mail)) {
    echo("<p>" . $mail->getMessage() . "</p>");
    } else {
    echo("<p>Message sent successfully!</p>");
    }