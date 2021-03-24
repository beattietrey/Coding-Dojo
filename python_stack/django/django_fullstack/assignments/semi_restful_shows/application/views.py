from django.shortcuts import render, redirect
from application.models import *
from django.contrib import messages

# Display

def shows(request):
    context={
        'shows':Show.objects.all()
    }
    return render(request, "index.html", context)

def new_show(request):
    return render(request, 'new_show.html')

def show_info(request, id):
    context={
        'show':Show.objects.get(id=id)
    }
    return render(request, 'show_info.html', context)

def show_edit(request,id):
    context={
        'show': Show.objects.get(id=id)
    }
    return render(request, 'show_edit.html', context)


# Action
def index(request):
    return redirect('/shows')

def create_show(request):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/shows/create")
    else:
        show = Show.objects.create(
            title=request.POST['title'],
            network=request.POST['network'],
            release_date=request.POST['release_date'],
            description=request.POST['description'],
        )
        
        return redirect(f'/shows/{show.id}')

def show_update(request,id):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
            return redirect(f"/shows/{id}/update")
    else:
        show = Show.objects.get(id=id)
        show.title = request.POST['title']
        show.network = request.POST['network']
        show.release_date = request.POST['release_date']
        show.description = request.POST['description']
        show.save()
        return redirect(f'/shows/{id}')

def show_destroy(request,id):
    show = Show.objects.get(id=id)
    show.delete()
    return redirect('/')

def delete_db(request):
    Show.objects.all().delete()
    print('deleted everything')
    return redirect('/shows')