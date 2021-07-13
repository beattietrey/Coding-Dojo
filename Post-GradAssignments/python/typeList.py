# Write a program that takes a list and prints a message for each element in the list, based on that element's data type.

# Your program input will always be a list. For each item in the list, test its data type. If the item is a string, concatenate it onto a new string. If it is a number, add it to a running sum. At the end of your program print the string, the number and an analysis of what the list contains. If it contains only one type, print that type, otherwise, print 'mixed'.

# Here are a couple of test cases. Think of some of your own, too. What kind of unexpected input could you get?

# #input
l1 = ['magical unicorns',19,'hello',98.98,'world']
# #output
# "The list you entered is of mixed type"
# "String: magical unicorns hello world"
# "Sum: 117.98"

# # input
l2 = [2,3,1,7,4,12]
# #output
# "The list you entered is of integer type"
# "Sum: 29"

# # input
l3 = ['magical','unicorns']
# #output
# "The list you entered is of string type"
# "String: magical unicorns"

def listOutput(list):
    stringOut = ""
    intOut = 0
    strCount = 0
    intCount = 0
    for item in list:
        if isinstance(item, str):
            stringOut+=item
            stringOut+= " "
            strCount+=1
        else:
            intCount+=1
            intOut+=item
    if strCount > 0 and intCount == 0:
        print("The list you entered is of string type")
        print("String: "+stringOut)
    elif intCount > 0 and strCount == 0:
        print("The list you entered is an int type")
        print("Sum: "+str(intOut))
    else:
        print("The list you entered is a mixed type")
        print("String: "+ stringOut)
        print("Sum: "+ str(intOut))


listOutput(l1)
print("_____________")
listOutput(l2)
print("_____________")
listOutput(l3)