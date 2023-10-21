function factorial(n) {
    let num = 1
    for (i = 1; i <= n; i++) {
        num = num * i
    }
    console.log(num)
}

factorial(1)
factorial(0)
factorial(5)

// Big-O(n) linear