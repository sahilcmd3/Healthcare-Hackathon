from celery import shared_task
from .email_utils import send_email
from .notifications_utils import send_notification

@shared_task
def send_reminder_email(subject, message, recipient_list):
    response = send_email(subject, message, recipient_list)
    return response

@shared_task
def send_notification(title, message):
    response = send_notification(title, message)
    return response