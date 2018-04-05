#!/bin/bash

echo "Hello World"
# Terminal sending starts here

# 1
echo "Subject: 1" | sendmail "<RECIPIENT_ADDRESS>"
# 2
ssmtp  "<RECIPIENT_ADDRESS>" < mail.txt
# 3
echo "Subject: 3" | sendmail -v "<RECIPIENT_ADDRESS>" < mail.txt
# 4
curl --url "smtps://smtp.gmail.com:465" --ssl-reqd \
  --mail-from "<SENDER_ADDRESS>" --mail-rcpt "<RECIPIENT_ADDRESS>" \
  --upload-file mail.txt --user "<GMAIL_USER>:<GMAIL_PASSWORD>"
# 5
curl -sv --user 'api:key-7e55d003b6608...943f79accd31a' \
    https://api.mailgun.net/v3/sandbox21a78...6b913eb160ebc79.mailgun.org/messages \
    -F from='Excited User <SENDER_ADDRESS>' \
    -F to=sandbox21a78f8...13eb160ebc79.mailgun.org \
    -F to=<RECIPIENT_ADDRESS> \
    -F subject='5' \
    -F text='Testing some Mailgun awesomeness!' \
   --form-string html='<h1>EDMdesigner Blog</h1><br /><cite>This tutorial helps me understand email sending from Linux console</cite>' \
    -F attachment=@logo2yellow.jpg
# 6
swaks --header "Subject: 6" --to "<RECIPIENT_ADDRESS>" -s smtp.gmail.com:587 -tls -au <GMAIL_USER> -ap <GMAIL_PASSWORD>
# 7
swaks --header "Subject: 7" --to "<RECIPIENT_ADDRESS>" -s smtp.gmail.com:587 -tls -au <GMAIL_USER> -ap <GMAIL_PASSWORD  --attach  -d ./mail.txt
# 8
mutt -s "8" "<RECIPIENT_ADDRESS>" < /dev/null
# 9
mutt  -s "9" "<RECIPIENT_ADDRESS>" -a ./backup.sql  < /dev/null
# 10
mutt -s "11" "<RECIPIENT_ADDRESS>" -a mail.txt < email.html
# 11
mailx -s "11" < /dev/null "<RECIPIENT_ADDRESS>"
# 12
echo "message body" | mail -s "12" <RECIPIENT_ADDRESS>
# 13
echo "message body" | mailx -s "13" <RECIPIENT_ADDRESS>
# 14
mail -a 'Content-Type: text/html' -s "14" < email.html "<RECIPIENT_ADDRESS_1>, <RECIPIENT_ADDRESS_2>"
# 15
mailx -a 'Content-Type: text/html' -s "15" < email.html "<RECIPIENT_ADDRESS_1>, <RECIPIENT_ADDRESS_2"
# 16
openssl s_client -connect smtp.gmail.com:465 -crlf -ign_eof
# EHLO localhost
# AUTH PLAIN *passwordhash*
# MAIL FROM: <developer@edmdesigner.com>
# rcpt to: <friendly@user.com>
# DATA

# Subject: 16

# Hello nice user
# .

# Terminal sending ends here
echo "goodbye world"
