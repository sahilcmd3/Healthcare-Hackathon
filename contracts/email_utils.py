from azure.communication.email import EmailClient, EmailContent, EmailAddress, EmailMessage
from django.conf import settings

def send_email(subject, message, recipient_list):
    email_client = EmailClient.from_connection_string(settings.ACS_CONNECTION_STRING)

    content = EmailContent(
        subject=subject,
        plain_text=message
    )

    recipients = [EmailAddress(email=recipient) for recipient in recipient_list]

    message = EmailMessage(
        sender="msgsahil5@gmail.com",
        content=content,
        recipients=recipients
    )

    response = email_client.send(message)
    return response