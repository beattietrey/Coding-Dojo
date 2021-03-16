from django.shortcuts import render, redirect

# Create your views here.

# display
def index(request):
    if 'counter' in request.session:
        request.session['counter']+=1
    else:
        request.session['counter'] = 1
    if 'alt_counter' in request.session:
        request.session['alt_counter']+=1
    else:
        request.session['alt_counter'] = 1
    
    return render(request, 'index.html') 









# action



def destroy(request):
    request.session.clear()
    return redirect('/')

def increment(request):
    request.session['alt_counter']+=1
    return redirect('/')

def form_increment(request):
    inc = request.POST['form_increase']
    request.session['alt_counter']+=int(inc)
    request.session['alt_counter']-=1
    print(inc)
    return redirect('/')


