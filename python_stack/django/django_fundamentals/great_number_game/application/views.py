from django.shortcuts import render, redirect
import random

# display
def index(request):
    if 'number' not in request.session:
        request.session['number'] = random.randint(1,100)
    print(f"The number is {request.session['number']}")
    return render(request,'index.html')




# action

def guess(request):
    if 'count' in request.session:
        request.session['count']+=1
    else:
        request.session['count'] = 1
    count = int(request.session['count'])
    if count == 5:
            return render(request, 'loser.html')
    context= {
        'attempt': int(request.POST['attempt']),
        'count':request.session['count']
    }
    return render(request,'guess.html', context)

def restart(request):
    request.session.clear()
    return redirect('/')

# def leaderboards(request):
#     context= {
#         'user_name': request.POST['user_name'],
#         'attempts' : int(request.POST['attempt']),
#     }