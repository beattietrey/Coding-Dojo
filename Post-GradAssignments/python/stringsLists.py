# Find and Replace
# In this string: 
words = "It's thanksgiving day. It's my birthday,too!" 
# print the position of the first instance of the word "day". Then create a new string where the word "day" is replaced with the word "month".

print(words.find("day"))
newString = words.replace("day","month", 1)
print(newString)

# Min and Max
# Print the min and max values in a list like this one: 
x = [2,54,-2,7,12,98]
# Your code should work for any list.

def printMinMax(list):
    print(min(list))
    print(max(list))

printMinMax(x)

# First and Last
# Print the first and last values in a list like this one: 
x1= ["hello",2,54,-2,7,12,98,"world"]
# Now create a new list containing only the first and last values in the original list. Your code should work for any list.

def firstLast(list):
    print(list[0])
    print(list[len(list)-1])
    return [list[0],list[len(list)-1]]

print(firstLast(x1))


# New List
# Start with a list like this one: 
x2 = [19,2,54,-2,7,12,98,32,10,-3,6]
# Sort your list first. Then, split your list in half. Push the list created from the first half to position 0 of the list created from the second half. The output should be: [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]. Stick with it, this one is tough!

x2.sort()
firstX2 = x2[:len(x2)//2]
lastX2 = x2[len(x2)//2:]
lastX2.insert(0,firstX2)
print(lastX2)
