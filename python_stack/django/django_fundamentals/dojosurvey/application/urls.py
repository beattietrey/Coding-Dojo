from django.urls import path
from . import views

urlpatters = [
    path('', views.index),
    path('/result', views.result),
]