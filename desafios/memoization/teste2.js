const mochila = {}

const val = (a,mochila) => {
    if (mochila[a]) {
        return mochila[a]
    }
    if (a <= 1) {
        return 1
    }

    return mochila[a] = val(a-3,mochila) + val(a-5, mochila)
}

console.log(val(100,mochila))
console.log(val(100,mochila))
console.log(val(100,mochila))
console.log(val(100,mochila))
console.log(val(100,mochila))