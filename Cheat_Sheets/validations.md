# Validations and Hashing Passwords

**Validations**
1. Validations and authentications are two different things. Validations are usually put in models.py, authentications are put in views.py
1. Validations verify that the information users submit is the proper information
    * i.e. email addresses are proper email addresses
1. import **re** on your models page
1. First you import models and create a model manager 
    ```py
    class ModelnameManager(models.Manager):
        def basic_validator(self, postData):
            errors = {}
            if len(postData['first_name']) < 2:
                errors['first_name'] = 'First name must be greater than 2 characters!'
            if len(postData['last_name']) < 2:
                errors['last_name'] = 'Last name must be greater than 2 characters!'
            EMAIL_REGEX=re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
            if not EMAIL_REGEX.match(postData['email']):
                errors['email'] = 'Invalid email address!'
            if len(postData['password']) < 7:
                errors['password'] = "Passwords must be 8 characters or greater!!"
            if postData['password'] != postData['chkPassword']:
                errors['chkPassword'] = 'Passwords do not match'
            return errors
    ```
1. Then add your validator to your other Models that need it
    ```py
    objects = ModelnameManager()
    ```
1. Import **messages** from **django.contrib** to your **views.py**
1. Then add your validator to your views actions
    ```py
    errors = Modelname.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in erors.items():
            messages.error(request,value)
        return redirect('/')
    ```
1. On your template add a message at the bottom
    ```py
    {% if messages %}
    <ul class="messages">
        {% for message in messages %}
        <li>
        {{} message }}
        </li>
        {% endfor %}
    </ul>
    {% endif %}
    ```
1. Things you may want to do 
    - You need to check to see if an email is unique
    - 

**Hashing Passwords**
1. Hashing a password runs the password through an algorithm and saves an answer based on it, rather than saving the password itself
1. If you have not installed bcrypt, you should run the installer for it
    ```py
    pip install bcrypt
    ```
1. Import **bcrypt** into your views.py
    ```py
    import bcrypt
    ```
1. Add password hashing into your methods
    ```py
    password = request.POST['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    print(pw_hash)
    ```
1. Add your pw_hash to your create object in place of the password itself
1. Add bcrypt to your login, as well as verifying that you have imported messages from django.contrib
    ```py
    if bcrypt.checkpw(request.POST['password'].encode(), user_matching_email.password.encode()):
        request.sesion['user_id'] = user_matching_email.id
    else:
        messages.add_message(request, messages.ERROR, 'Invalid Credentials')
    ```

