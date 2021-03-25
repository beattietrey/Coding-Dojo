from django.db import models
from datetime import datetime, date,timedelta


# Create your models here.
class ShowManager(models.Manager):
    def basic_validator(self, postData):
        today = datetime.today()
        errors = {}
        # if len(postData['title']) < 2:
        #     errors['title'] = 'Title must be at least 2 characters'
        if len(postData['network']) < 3:
            errors['network'] = 'Network must be at least 3 characters'
        if len(postData['description']) > 0 and len(postData['description']) < 10:
            errors['description'] = 'Description must be at least 10 characters'
        # if postData['release_date'] > timezone.now().date():
        #     errors['release_date'] = 'Release date must be in the past'
        if len(Show.objects.filter(title=postData['title']))>0:
            errors['title'] = 'Title already in use'
        if datetime.strptime(postData['release_date'], "%Y-%m-%d") < today:
            errors['release_date'] = "Release Date must be in the past"
        return errors


class Show(models.Model):
    title = models.CharField(max_length=60)
    network = models.CharField(max_length=20)
    release_date= models.DateField(default=1900-0o1-0o1)
    description=models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True) #create automatically
    updated_at = models.DateTimeField(auto_now=True) #create automatically
    objects = ShowManager()