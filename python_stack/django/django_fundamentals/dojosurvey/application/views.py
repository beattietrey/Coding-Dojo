from django.shortcuts import render, HttpResponse, redirect



def index(request):
    return render(request, 'index.html')

def result(request):
    # if request.method =="POST":
    print('Got Post Info')
    context= {
        'name': request.POST['name'],
        'email': request.POST['email'],
        'location': request.POST['location'],
        'language': request.POST['language'],
        'color': request.POST['color'],
        'comments': request.POST['comments'],
        'how': request.POST['how'],
        'number': request.POST.getlist('number'),
    }
    print(request.POST)
    return render(request, 'result.html', context)





