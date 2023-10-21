function reccFib(num) {
    if (num < 2) return num;
    console.log('recusive fib function')
    return reccFib(num - 1) + reccFib(num - 2)
}

console.log(reccFib(8))

function memoizedFib(num, memo) {
    memo = memo || {};
    if (memo[num]) {
        return memo[num];
    }
    if (num < 2) {
        return num;
    }
    console.log('function ran')
    return memo[num] = memoizedFib(num - 1, memo) + memoizedFib(num - 2, memo)
}

console.log(memoizedFib(8))