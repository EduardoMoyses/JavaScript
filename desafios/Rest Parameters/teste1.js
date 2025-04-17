function somar(...args) {
    return args.reduce((acc, val) => acc + val,0)
}

console.log(somar(1,2,3,4,5))

function multiplicar(...args) {
    return args.map(n => n * 2)
}

console.log(multiplicar(1,2,3,4,5))

const numeros = [1,2,3,4,5,6]
const dobrados = numeros.map(n => n * 2)
console.log(dobrados)