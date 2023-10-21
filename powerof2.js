function poweroftwo(n) {
    if (n < 1) return false;
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n /= 2
    }
    return true
}

console.log(poweroftwo(1))
console.log(poweroftwo(2))
console.log(poweroftwo(6))
// Big-O(log n) input 'n' reduces by half



function poweroftwoOptimal(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0
}

console.log(poweroftwo(1))
console.log(poweroftwo(2))
console.log(poweroftwo(6))

//Big-O(1) constant