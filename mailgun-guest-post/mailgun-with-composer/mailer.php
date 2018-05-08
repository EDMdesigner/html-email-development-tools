<?php
# Include the Autoloader
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client
$mgClient = new Mailgun('key-7e55d003b6...ccd31a');
$domain = "sandbox21a78f824a064bc586b913eb160ebc79.mailgun.org";

# Make the call to the client
$result = $mgClient->sendMessage($domain,
  array('from'    => 'Excited Developer <sender@address.org>',
        'to'      => 'Friendly User <recipient@address.com>',
        'subject' => 'Example subject line',
        'text'    => 'Mailgun is awesome!'));