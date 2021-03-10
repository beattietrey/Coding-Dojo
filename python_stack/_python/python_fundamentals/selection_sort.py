def selection_sort(li):
    minIdx = 0 # what am I using this for?
    for i in range(0,len(li),1): #starting at beginning of list
        print(i)
        min = li[i]
        for j in (i, len(li)-1,1):
            print(j)
            if li[j] < min:
                print(min)
                min = li[j]
                minIdx = j
        temp = li[j]
        li[j] = li[minIdx]
        li[i] = temp
        print(li)
    return li


selection_sort([9,8,7,6,5,4,3,2,1])
