function fib(n) {
    const series = [0, 1]
    for (i = 2; i < n; i++) {
        // (i = 0; i < n-2 ; i++)
        // series.push(series[i] + series[i + 1])
        series[i] = series[i - 1] + series[i - 2]
    }
    console.log(series);
}

fib(2)
fib(3)
fib(10)

// Big-O(n) linear