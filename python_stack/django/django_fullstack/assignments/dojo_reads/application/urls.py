from django.urls import path     
from . import views

urlpatterns= [
    path('', views.success),
    path('add', views.add_book_page),
    path('<book_id>', views.book_info),


    path('add_book', views.add_book),
    path('add_review', views.add_review),
]