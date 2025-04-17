function valormaximo() {
    let max = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}

console.log(valormaximo(1,2,4,10,5,9))