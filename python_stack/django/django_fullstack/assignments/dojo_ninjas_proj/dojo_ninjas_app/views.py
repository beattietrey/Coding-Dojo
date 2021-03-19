from django.shortcuts import render, redirect
from dojo_ninjas_app.models import *

# Create your views here.
def index(request):
    context={
        'dojos': Dojo.objects.all(),
    }

    return render(request, 'index.html', context)

def dojo(request):
    Dojo.objects.create(
        name=request.POST['name'],
        city=request.POST['city'],
        state=request.POST['state'],
    )
    return redirect('/')

def ninja(request):
    Ninja.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        dojo_id=Dojo.objects.get(id=request.POST['dojo_id']),
    )
    return redirect('/')

def delete_dojo(request,dojo_id):
    dojo=Dojo.objects.get(id=dojo_id)
    dojo.ninjas.all().delete()
    dojo.delete()
    return redirect('/')