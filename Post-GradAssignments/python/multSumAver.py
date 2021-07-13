# Multiples
# Part I - Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't use a list to do this exercise.

for count in range(0, 1000):
    print(count)

# Part II - Create another program that prints all the multiples of 5 from 5 to 1,000,000.

for count in range(0,1000000):
    if count % 5 == 0:
        print(count)

# Sum List
# Create a program that prints the sum of all the values in the list: 
a = [1, 2, 5, 10, 255, 3]
sum = 0
for value in a:
    sum+=value
    print(sum)

# Average List
# Create a program that prints the average of the values in the list: 
a2 = [1, 2, 5, 10, 255, 3]
sum = 0
for value in a2: 
    sum+=value
print(sum/len(a))