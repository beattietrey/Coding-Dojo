from django.urls import path,include    
from . import views

urlpatterns = [
    # display
    path('', views.registration_page),	   
    path('wall/', include('wall_app.urls')),


    # action
    path('register', views.registration),
    path('login', views.login),
    path('logout', views.logout),
    path('delete', views.deletedb),
]