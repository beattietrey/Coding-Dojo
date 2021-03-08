# basic
for i in range(0,151,1):
    print(i)

# multiples of five
for i in range(5,1001,5):
    print(i)

# counting, the dojo way
for i in range(1,101,1):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)

# whoa, that suckers huge
x = 0
for i in range(1,500001,2):
    x+=i
else:
    print(x)

# countdown by fours
for i in range(2018,0,-4):
    print(i)

# flexible counter
# Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

# lowNum = 2
# highNum = 9
# mult = 3

x = lowNum
y = highNum
while x <= y:
    if(x % mult == 0):
        print(x)
    x+=1