// find a number in sorted array of size infinity


// solution by taking fixed length chunck
function main(arr, target) {
    let chunkstart = 0;
    let chunkend = 3;
    while (arr[chunkstart]) {
        if (!arr[chunkend]) {
            chunkend--;
            continue;
        }
        let start = chunkstart;
        let end = chunkend;
        console.log(start, end)
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
        chunkstart = chunkstart + 4
        chunkend = chunkend + 4;
    }
    return -1
}

console.log(main([1, 2, 3, 5, 6, 7, 8, 9, 11, 44, 21, 34, 50], 50))