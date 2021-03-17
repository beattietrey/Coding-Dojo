from django.shortcuts import render, redirect
import random
from datetime import datetime
from pytz import timezone
import pytz
# Create your views here.

date_format='(%b,%d,%Y %H:%M)'
date = datetime.now(tz=pytz.utc)
date = date.astimezone(timezone('US/Pacific'))


def home(request):
    # if goal not in request.session:
        # return redirect(request,'start')
    if 'timeline' not in request.session:
        request.session['timeline'] = []
    if 'gold' not in request.session:
        request.session['gold'] = 0
    context={
        'gold': int(request.session['gold']),
        'timeline': request.session['timeline'],
    }
    return render(request, 'index.html', context)

def farm(request):
    number = random.randint(10,20)
    request.session['gold']+=number
    request.session['timeline'].append(f'Earned {number} gold coins at the farm! ({date})')
    context={
        'color':'green'
    }
    return redirect('/', context)

def cave(request):
    number = random.randint(5,15)
    request.session['gold']+=number
    request.session['timeline'].append(f'Earned {number} gold coins at the cave! ({date})')
    context={
        'color':'green'
    }
    return redirect('/', context)

def house(request):
    number = random.randint(2,5)
    request.session['gold']+=number
    request.session['timeline'].append(f'Earned {number} gold coins at the house! ({date})')
    context={
        'color':'green'
    }
    return redirect('/', context)

def casino(request):
    number = random.randint(-50,50)
    request.session['gold']+=number
    if number >= 0:
        context={
        'color':'green'
    }
        request.session['timeline'].append(f'Earned {number} gold coins at the cave! ({date})')
    else:
        context={
        'color':'red'
    }
        request.session['timeline'].append(f'Lost {-number} gold coins at the cave! ({date})')
    return redirect('/', context)

def clear(request):
    request.session.clear()
    return redirect('/')