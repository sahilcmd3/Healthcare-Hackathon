from azure.mgmt.notificationhubs import NotificationHubsManagementClient
from azure.mgmt.notificationhubs.models import GcmCredential
from django.conf import settings
from azure.identity import DefaultAzureCredential

def send_notification(title, message):
    credential = DefaultAzureCredential()
    client = NotificationHubsManagementClient(credential, settings.NOTIFICATION_HUB_CONNECTION_STRING)
    
    notification = {
        "message": {
            "title": title,
            "body": message
        }
    }

    client.notification_hubs.create_or_update(
        resource_group_name='Health-Hackathon',
        namespace_name='Healthcare-Noti',
        notification_hub_name='Health_nots',
        parameters=notification
    )