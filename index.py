arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

def O2(arrX, arrY):
    for i in range(len(arrX)):
        for j in range(len(arrY)):
            print(f'{i} x {j} = {i*j}')
    
O2(arr1, arr2)