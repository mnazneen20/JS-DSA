// search all the elements in the array from
// index 0 to index arr.length-1
// best case O(1) when the target is on index 0.
// worst case O(n) when the target is on the last index(n --> length of the array -1) that of the array

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }

    return -1
}

// console.log(linearSearch([1, 3, 22, 34, 5], 34))


// Questions related to linear search
// ===================================


//Q1. Search if a character is present in a string.
function searchInString(str, target) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === target.toLowerCase()) {
            console.log(i);
            return;
        }
        console.log('not in the string')
        return
    }
}
// searchInString('Nazneen', 'm');





// Q2. Search in a range
function searchInRange(arr, start, end, target) {
    for (let i = start; i <= end; i++) {
        if (arr[i] === target) return i;
    }
    return -1
}
// console.log(searchInRange([1, 2, 3, 4, 5, 6], 2, 4, 1))
// console.log(searchInRange([1, 2, 3, 4, 5, 6], 2, 4, 4))




// Q3. firnd minimum number
function minimumNum(arr) {
    let min = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i
        }
    }
    console.log('minimum number in the array is:', arr[min]);
    return
}
// minimumNum([11, 3, -1, 24, 5])





// Q4. search in 2D arrays
const arr2D = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

function SearchIn2dArr(arr, target) {
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] === target) {
                return `[${row}, ${col}]`
            }
        }
    }
    return -1
}
// console.log(SearchIn2dArr(arr2D, 6))




// Q5. find numbers with even number of digits in an array.
function evenNums(arr) {
    let evendigits = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) continue;
        if (arr[i] < 0) arr[i] *= -1;
        if (arr[i].toString().length % 2 === 0) {
            evendigits++
        }
    }

    return evendigits
}
// console.log(evenNums([2223, 5, 1231, 9, -12, 0]))




// Q6. find the max wealth (rows represent individual person, cols represent persons bank accounts money) 

const wealth = [[1, 5], [7, 3], [3, 5]];

function maxWealth(accounts) {
    let max = 0;
    for (let person = 0; person < accounts.length; person++) {
        let totalWealth = 0;
        for (let bank = 0; bank < accounts[person].length; bank++) {
            totalWealth += accounts[person][bank];
        }
        if (totalWealth > max) { max = totalWealth }
    }
    return max;
}
console.log(maxWealth(wealth))