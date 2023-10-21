// BUBBLE SORT
// compare adjacent elements and SWAP if not in order
// if SWAP occurred - repeat the comparison
// if NO SWAP - end
// Big O(n^2)

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr
}

console.log(bubbleSort([-3, 11, -22, 2, 4, 1, 23]))