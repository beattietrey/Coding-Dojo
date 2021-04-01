from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from login.models import *

# Create your models here.

class Author(models.Model):
    name=models.CharField(max_length=100)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

class Book(models.Model):
    title= models.CharField(max_length= 255)
    author=models.ForeignKey(Author, related_name='books', on_delete = models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

class Review(models.Model):
    review_content=models.TextField()
    rating=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    book=models.ForeignKey(Book, related_name='books', on_delete=models.CASCADE)
    reviewer=models.ForeignKey(User, related_name='users',on_delete=models.CASCADE)
    created_at=models.DateField(auto_now_add=True)
    updated_at=models.DateField(auto_now=True)

