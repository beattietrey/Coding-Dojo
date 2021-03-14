from django.shortcuts import render, HttpResponse
from time import gmtime, strftime
import datetime
import pytz

def index(request):
    context = {
        # "time": strftime("%y-%m-%d %H:%M %p", gmtime()),
        "time": datetime.datetime.now(pytz.timezone('US/Pacific')),
    }
    return render(request, 'index.html', context)

