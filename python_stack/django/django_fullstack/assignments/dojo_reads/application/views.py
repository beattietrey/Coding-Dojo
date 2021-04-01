from django.shortcuts import render, redirect
from login.models import *
from .models import *

# Create your views here.
def success(request):
    if 'id' not in request.session:
        return redirect('/')
    else:
        all_reviews=Review.objects.all()
        length_all_reviews = len(all_reviews)
        if length_all_reviews < 3:
            new_reviews=all_reviews
        else:
            new_reviews=Review.objects.all()[length_all_reviews-4:3]

        context={
            'how': request.session['how'],
            'user': User.objects.get(id=request.session['id']),
            'reviews': new_reviews,
            'books': Book.objects.all(),
        }
        return render(request, 'home_page.html', context)

def add_book_page(request):
    context={
        'authors': Author.objects.all()
    }
    return render(request, 'add_book.html')

def book_info(request, id):
    context={
        'book': Book.objects.get(id=id)
    }
    return render(request,"book_info.html", context)


    # action
def add_review(request):
    review = Review.objects.create(

    )

def add_book(request):
    pass
