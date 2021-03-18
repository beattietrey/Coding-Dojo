# One to Many Relationships
*You will need this for the exam*

---

Relationships - a connection between objects and the way that they are connected

- one-to-many (Author to books) (Owner and pets)
- many-to-many 
- one-to-one

When created a model with a relationship, you use a ForeignKey

Creating a Model -

- create a class

    ```py
    class Class_name(model.Models):
    ```

- add statements to class
    ```py
    rating = models.IntegerField()
    content = models.TextField()
    name = models.CharField(max_length=60)
    created_at = models.DateTimeField(auto_now_add=True) #create automatically
    updated_at = models.DateTimeField(auto_now=True) #create automatically
    ```

- add relationships in statements
    ```py
    ___________ = models.ForeignKey(ConnectedClass, related_name='Reviews', on_delete=models.CASCADE)
    ```

- **foreign key** goes on the **many** side, so gives it a **related name** equal to a plural of itself
    - dont forget that the one of the **many** relationship will now have the **related name** in it's phantom properties
    ```py
    # add many's related_name.all() to one's class
    ```

- When creating an instance of the **many** side, use the related **one** as it's related variable

- Whenever you update models..
    ```py
    python manage.py makemigrations

    python manage.py migrate
    ```

    ```py
    # you can check to see if they are there by using the shell
    from application_name.models import *
    class_name
    ```

