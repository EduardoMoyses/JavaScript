/*const fib = (n) => {
    if (n <= 1) {
        return 1
    }

    return fib (n-1) + fib(n-2)
}

console.log(`fib: ${fib(40)}`)
console.log(`fib: ${fib(40)}`)
console.log(`fib: ${fib(40)}`)
console.log(`fib: ${fib(40)}`)*/

const memo = {}
const fib = (n,memo) => {
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 1) {
        return 1
    }
    return  memo[n] = fib(n-1, memo) + fib(n-2, memo)
}

console.log(`fib: ${fib(3, memo)}`)
console.log(`fib: ${fib(3, memo)}`)
console.log(`fib: ${fib(3, memo)}`)
console.log(`fib: ${fib(3, memo)}`)