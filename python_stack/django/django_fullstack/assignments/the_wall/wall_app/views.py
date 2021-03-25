from django.shortcuts import render,redirect
from login.models import *
from .models import *

# Create your views here.

def success(request):
    if 'id' not in request.session:
        return redirect('/')
    else:
        today= datetime.today()
        t=timedelta(minutes=-30)
        context={
            'timeframe':today+t,
            'how': request.session['how'],
            'user': User.objects.get(id=request.session['id']),
            'messages': Message.objects.all(),
            'comments': Comment.objects.all(),
        }
        return render(request, 'home_page.html', context)

def post_message(request):
    message=Message.objects.create(
        message_body=request.POST['message_box'],
        user= User.objects.get(id=request.session['id'])
    )
    return redirect('/wall')

def post_comment(request):
    comment=Comment.objects.create(
        comment_body=request.POST['comment_box'],
        user= User.objects.get(id=request.session['id']),
        message=Message.objects.get(id=request.POST['message_id'])
    )
    return redirect('/wall')

def delete_message(request):
    message=Message.objects.get(id=request.POST['message_id'])
    message.delete()
    return redirect('/wall')