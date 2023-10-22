// devides the array to half continously and decreases
// the number of elements into half on every iteration.
// best case O(1) when target is in the middle index.
// worst case O(logn)
// BigO(log n)

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) return mid;

        if (arr[mid] < target) {
            start = mid + 1
        }
        if (arr[mid] > target) {
            end = mid - 1
        }
    }
    return -1
}

// console.log(binarySearch([-5, 2, 4, 6, 10], 10))
// console.log(binarySearch([-5, 2, 4, 6, 10], 6))
// console.log(binarySearch([-5, 2, 4, 6, 10], 30))

// **********************************************************************************************************************************

// recursivebinary search: 
function reccursiveBinary(arr, start, end, target) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else {
        if (arr[mid] < target) {
            return reccursiveBinary(arr, mid + 1, end, target)
        }
        return reccursiveBinary(arr, start, mid - 1, target)
    }
}
// console.log(reccursiveBinary([-5, 2, 4, 6, 10], 0, 4, 30))