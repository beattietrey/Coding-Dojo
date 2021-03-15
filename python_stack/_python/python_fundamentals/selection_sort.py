def selection_sort(li):
    minIdx = 0
    for i in range(0,len(li),1):
        least = li[i]
        for j in range(i+1,len(li),1):
            if li[j] < li[i]:
                least = li[j]
                minIdx = j
                li[minIdx] = li[i]
                li[i] = least
    return li



print(selection_sort([9,8,7,6,5,4,3,2,1]))