from django.shortcuts import render, HttpResponse, redirect, response

def root(request):
    return redirect("/blogs")
# Create your views here.

def index(request):
    return HttpResponse("placeholder to later display a list of blogs")

def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")

def create(request):
    return redirect('/')

def show(request, number):
    number = number
    return HttpResponse(f"placeholder to display blog number: {number}")

def edit(request, number):
    number = number
    return HttpResponse(f"placeholder to edit blog {number}")

def destroy(request,number):
    return redirect('/blogs')

# def title(request):
#     return response.json().then({
#         title: "My First Blog",
#         content: "Lorem, ipsum dolor sit amet consectur blah blah blah"
#     })