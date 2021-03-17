# Checklist of Django Projects

**Checklist**

1. Load our virtual environment- i.e. django, flask
1. Go to my_environments folder
    ```py
        source djangoEnv/Scripts/activate
    ```
1. Go to folder where I want the project
1. Create a new project
    ```py
    django-admin startproject project_name
    ```
1. Navigate into the project
    ```py
    cd project_name
    ```
1. Create Apps for project
    ```py
    python manage.py startapp application_name
    ```
1. Add apps in settings to INSTALLED_APPS, inside project level folder
    ```py
    INSTALLED_APPS = [
       'django.contrib.admin',
       'django.contrib.auth',
       'django.contrib.contenttypes',
       'django.contrib.sessions',
       'django.contrib.messages',
       'django.contrib.staticfiles',
        
        # my apps
       'your_app_name_here', # added this line. Don't forget the comma!!
   ]    # the trailing comma after the last item in a list, tuple, or dictionary is commonly accepted in Python
   ```
1. Open new VS Code
    ```py
    code .
    ```
1. Go to urls.py in project level folder
    - remove admin line and admin path
    - import include
    - add...
        ```py
        path('', include('your_app_name_here.urls')),	   
        ```
    - should look like this
    ```py
    from django.urls import path, include           # import include
    # from django.contrib import admin              # comment out, or just delete
    urlpatterns = [
    path('', include('your_app_name_here.urls')),	   
    # path('admin/', admin.sites.urls)         # comment out, or just delete
    ]
    ```
1. Create urls file inside our **App Level** folder and go there
1. Add the following code...
    ```py
    from django.urls import path     
    from . import views
    
    urlpatterns = [
        path('', views.index),	   
    ]
    ```
1. Add .index method into the views.py file in App Level folder
    ```py
    from django.shortcuts import render, HttpResponse
    
    def index(request):
    return HttpResponse("this is the equivalent of @app.route('/')!")
    ```
1. Run the server from the terminal
    ```py
    python manage.py runserver
    ```
1. **MAKE SURE YOU SAVE ALL YOUR FILES**