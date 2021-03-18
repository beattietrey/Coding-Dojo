from django.db import models

# Create your models here.
class Dojo(models.Model):
    name = models.CharField(max_length=45)
    city = models.CharField(max_length=45)
    state = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True) #create automatically
    updated_at = models.DateTimeField(auto_now=True) #create automatically
    # ninjas.all()
    desc = models.TextField(max_length=250)


class Ninja(models.Model):
    dojo_id = models.ForeignKey(Dojo, related_name="ninjas", on_delete=models.CASCADE)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)


