# Object Oriented Programming

# What is an object?
#     A blueprint
#         A Car
#             Has 
#                 engine, transmissions, tires
#                 Doors
#                 Model
#                 Make
#                 Seats
#                 Color
#                 Type
#             Can Doors  
#                 Go forward, back
#                 Go left, right
#                 Go up and down
#                 Break
#                 Honk
    
#         var car1 = {
#             Attributes
#             type: "honda accord",
#             color: "black",
#             doors: 2,
#             size: "compact",
#             engine: "4"
#         }

#             methods
#             drive:function move(dir) {
#                 return move{dir}
#             }
#             honk: function honk() {
#                 return "beep beep"
#             }


# Real World Example
#     Space Invaders


# oopExample 
class Person:
#Attributes(or characteristics)
    def __init__(self, name='user', age=4, limbs=4, hair_color='bald'): #parameters to set up object
        print('a new human is born')
        self.name = name
        self.age = age
        self.limbs = limbs
        self.hair_color = hair_color
#methods
    def say_hello(self):
        print('Hello I am awesome!')
        print(f'Hello, my name is {self.name} and I am {self.age} years old.')
    def birthday(self):
        self.age+=1
        print(f"oh wow rick, look at me, I'm {self.age}")


#Instantiating a class

person1 = Person('Bob', 43, 4, 'Red')
person2 = Person('Mort', 14, 4, 'Pink')

person1.say_hello()
person2.say_hello()
person3 = Person('Mr. Meseeks',)

person2.birthday()


personList=[person1,person2,person3]

for person in personList:
    person.printInfo()