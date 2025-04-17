//? Parâmetros com Valores Predefinidos

function multiplicar(a=1,b=1) {
    return a * b
}

console.log(multiplicar(5))
console.log(multiplicar())
console.log(multiplicar(undefined,4))

function teste(num = 1) {
    console.log(typeof num)
}

teste()
teste(undefined)
teste("")
teste(null)

function concatenador(value,array = []) {
    array.push(value)
    return array
}

concatenador(1)
concatenador(2)
console.log(concatenador(3))


function chamaralgumacoisa(coisa = algumacoisa()) {
    return coisa
}

function algumacoisa() {
    return 'sth'
}

const result = chamaralgumacoisa()

console.log(result)

function somararraysobjetos([x,y] = [1,2],{z} = {z:3}) {
    return x + y + z
}

console.log(somararraysobjetos())
console.log(somararraysobjetos([3,4],{z: 1}))