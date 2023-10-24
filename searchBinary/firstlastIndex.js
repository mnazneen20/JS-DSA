function main(nums, target) {
    const index = [-1, -1];
    index[0] = search(nums, target, true);
    index[1] = search(nums, target);

    return index;
}

function search(arr, target, findstart = false) {
    let start = 0;
    let end = arr.length - 1;
    let answer = -1

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (arr[mid] > target) {
            end = mid - 1;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
        if (arr[mid] === target) {
            // possible answer;
            answer = mid;
            if (findstart) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return answer;
}

console.log(main([5, 7, 7, 8, 8, 10], 6))