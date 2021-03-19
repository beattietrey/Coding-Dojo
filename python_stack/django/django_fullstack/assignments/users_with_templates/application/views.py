from django.shortcuts import render, redirect
from application.models import *

# Create your views here.
def index(request):
    context= {
        'Users': User.objects.all()
    }
    return render(request, 'index.html', context)

def submit_user(request):
    User.objects.create(
        first_name=request.POST['fname'],
        last_name=request.POST['lname'],
        age=request.POST['age'],
        email=request.POST['email'],
    )
    return redirect('/')