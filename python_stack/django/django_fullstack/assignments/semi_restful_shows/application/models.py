from django.db import models

# Create your models here.
class Show(models.Model):
    title = models.CharField(max_length=60)
    network = models.CharField(max_length=20)
    release_date= models.DateField()
    description=models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True) #create automatically
    updated_at = models.DateTimeField(auto_now=True) #create automatically