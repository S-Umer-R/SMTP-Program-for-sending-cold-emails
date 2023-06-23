README.md

# Cold Email Website

Cold Email Website is a web application that allows users to send cold emails to multiple recipients. It provides a simple interface to input sender and receiver email addresses, subject, and message content. The application uses SMTP.js library to send emails using the SMTP protocol.

## Features

- Add multiple sender email addresses.
- Add multiple receiver email addresses.
- Change the secure token used for email authentication.
- Send emails with a specified subject and message.
- Supports HTML content in the email body.

## Installation

1. Clone the repository to your local machine or download the source code.
2. Open the `index.html` file in a web browser.

## Usage

1. Launch the Cold Email Website by opening the `index.html` file in a web browser.
2. Enter the sender email address(es) in the "Sender Email" field. Click the "Add" button to add additional sender email fields.
3. Enter the receiver email address(es) in the "Receiver Email" field. Click the "Add" button to add additional receiver email fields.
4. Enter the subject of the email in the "Subject" field.
5. Enter the body content of the email in the "Body" textarea. HTML content is supported.
6. Click the "Send Email" button to send the email to all recipients.

## Limitations

- SMTP Server Compatibility: The effectiveness of the application depends on the compatibility and availability of the SMTP server used for sending emails. Some SMTP servers may have limitations or restrictions on the number of emails that can be sent or the frequency of sending. It's important to ensure that the chosen SMTP server can handle the desired email volume.

- Secure Token: The secure token is used for authentication when sending emails. While it provides a level of security, it should be stored securely and not shared publicly. Be cautious when changing the secure token and ensure it is kept confidential.

- Email Delivery and Spam Filters: The successful delivery of emails depends on various factors, including recipient email servers, spam filters, and the content of the email. There is no guarantee that all emails will be delivered to the recipients' inbox, as some may end up in spam folders or be rejected by the recipient's email server.

- User Experience: The web application's user interface and functionality may vary across different web browsers and devices. It's recommended to test the application on multiple browsers and devices to ensure compatibility and a consistent user experience.

- Legal Considerations: Sending cold emails must comply with relevant laws and regulations, such as anti-spam laws. It's important to obtain proper consent from recipients and adhere to applicable regulations in your jurisdiction.

- Security: This application runs entirely on the client-side, which means the secure token and sender email addresses are visible to anyone who inspects the HTML source code or network traffic. It is advisable not to use personal or sensitive email addresses or tokens in this application.
