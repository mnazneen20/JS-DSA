function isprime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isprime(1))
console.log(isprime(5))
console.log(isprime(7))

//Big-O (squareroot of n)