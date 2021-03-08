# print("Hello World!")

# x = "Hello Python!"
# print(x)
# y = 42

# name = "Zen"
# integer = 7
# print("My name is" , integer)

# first_name = "Zen"
# last_name = "Coder"
# age = 27
# print(f"My name is {first_name} {last_name} and I am {age} years old.")

# # same as (older version)
# print("My name is {} {} and I am {} years old.".format(first_name, last_name, age))

# # even older version
# print("My name is %s and I'm %d" % (name, age))

# 1. TASK: print "Hello World"
print("Hello World!")
# 2. print "Hello Noelle!" with the name in a variable
name = "Trey"
print("Hello", name, "!")	# with a comma
print("Hello " + name + "!")	# with a +
# 3. print "Hello 42!" with the number in a variable
name = "7"
print("Hello", name)	# with a comma
print("Hello " + name)	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi" # these are my favorite foods!!!
fave_food2 = "pizza"
print("I love to eat {} and {}.".format(fave_food1, fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string