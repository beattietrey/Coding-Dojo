# Data types
#     string
    # string of characters
my_name = "Trey is my name"
#     float, int, double (numbers)
x = 1   #int 
y = 1.01    #double - two decimal spaces
pi = 3.14159    #float
#     bool
test = True  # or false
#     list (arrays)
my_list = [1,2,3,4,5,6]
another_list = ['Yer', 'Jacob', 'TJ']
#     dictionaries (objects)
person1 = {'first_name':'Marc', 'last_name':'Dorsett'}
a_first_name = person1['first_name']
cars = {
    'car1': 'firebird',
    'car2': 'corvettes',
}
person1['age'] = 25
print(type(person1))

fname = 'Trey'
lname = 'Beattie'

my_string = f'Hello, my name is {fname} {lname}.'       #  f string = used to put variables inside a string
print(my_string)


#  Functions

def say_hello(name):
    print(f"hi my name is {name}")
    return True
say_hello('slim shady')

def adder(x,y):
    sum = x + y
    return sum

new_sum = adder(1,2)
print(new_sum)

print(adder(2,4))