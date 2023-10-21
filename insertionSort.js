//Insertion sort 
//Big O(n^2)

function insertionSort(arr) {
    let numbertoInsert
    for (let i = 1; i < arr.length; i++) {
        numbertoInsert = arr[i]

        let j = i - 1
        while (j >= 0 && arr[j] > numbertoInsert) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = numbertoInsert;
    }

    return arr
}

console.log(insertionSort([-6, 20, 8, -2, -1, 33, 40]))