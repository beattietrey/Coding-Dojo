# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]

def biggie_size(li):
    for i in range(0,len(li)):
        if li[i] > 0:
            li[i] = "big"
    return li


# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it

def count_positives(li):
    count = 0
    for i in li:
        if i > 0:
            count+=1
    li[len(li)-1] = count
    return li


# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7

def sum_total(li):
    sum = 0
    for i in li:
        sum+=i
    return sum

# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5

def average(li):
    sum = 0
    for i in li:
        sum+=i
    return sum / len(li)


# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0


def length(li):
    count = 0
    for i in li:
        count+=1
    return count


# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False

def minimum(li):
    if len(li) < 1:
        return False
    else:
        min = li[0]
        for i in li:
            if i < min:
                min = i
        return min


# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False

def maximum(li):
    if len(li) < 1:
        return False
    else:
        max = li[0]
        for i in li:
            if i > max:
                max = i
        return max


# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

def ultimate_analysis(li):
    li_analysis = {'sumTotal': sum_total(li), 'average': average(li), 'minimum': minimum(li), 'maximum': maximum(li), 'length': length(li)}
    return li_analysis


# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

def reverse_list(li):
    for i in range(len(li), len(li)//(2), 1):
        temp = li[i]
        li[i] = li[len(li) - int(i)]
        li[len(li)-int(i)] = temp
    return li

