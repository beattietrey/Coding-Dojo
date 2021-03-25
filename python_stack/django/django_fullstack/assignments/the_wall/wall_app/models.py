from django.db import models
from datetime import datetime, date,timedelta
from login.models import User
# Create your models here.


class Message(models.Model):
    message_body=models.TextField(max_length=240)
    user=models.ForeignKey(User, related_name='messages', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    comment_body=models.TextField(max_length=240)
    user=models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    message=models.ForeignKey(Message, related_name='msg_comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)