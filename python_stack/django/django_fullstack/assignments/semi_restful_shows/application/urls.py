from django.urls import path     
from . import views

urlpatterns = [
    # display
    path('shows', views.shows),
    path('shows/new', views.new_show),
    path('shows/<int:id>', views.show_info),
    path('shows/<int:id>/edit', views.show_edit),



    # action
    path('', views.index),
    path('shows/create', views.create_show),	   
    path('shows/<int:id>/update', views.show_update),
    path('shows/<int:id>/destroy', views.show_destroy),
    path('delete', views.delete_db),
]