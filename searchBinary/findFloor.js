// Q2. find the floor of a number: 
// largetst number that is <= (smaller than or equal) target

const sortedArr = [2, 3, 4, 5, 7, 9, 14, 16, 20]
function findFloor(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    if (target < arr[start]) return -1; // if target is smaller than the number at first index.

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) return target;
        if (arr[mid] > target) {
            end = mid - 1;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
    }
    return arr[end];
}

console.log(findFloor(sortedArr, 14));