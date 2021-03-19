from django.urls import path     
from . import views
    
urlpatterns = [
    path('', views.index),
    path('submit_dojo', views.dojo),
    path('submit_ninja', views.ninja),
    path('delete_dojo/<dojo_id>', views.delete_dojo),
    
]