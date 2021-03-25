from django.urls import path,include     
from . import views

urlpatterns = [
    # display
    path('', views.success),

    # action
    path('post_message', views.post_message),
    path('post_comment', views.post_comment),
    path('delete_message', views.delete_message),
    
]