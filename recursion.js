//recursive fibonacci series:
function recursiveFib(n) {
    if (n < 0) return undefined;
    if (n < 2) return n;
    return recursiveFib(n - 1) + recursiveFib(n - 2)
}



// console.log(recursiveFib(1))
//Big O (n)


// recursive factorial of  number:
function recursiveFact(n) {
    if (n < 0) return undefined;
    if (n < 2) return 1;
    return n * recursiveFact(n - 1)
}

// console.log(recursiveFact(-2))


function main() {
    const fibSeries = [];
    let n = 8;
    for (let i = 0; i <= n; i++) {
        fibSeries.push(recursiveFib(i))
    }
    console.log('fibonacci series:', fibSeries)
}
main()