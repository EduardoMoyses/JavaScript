/*const soma = (a) => (b) => a + b
const somar = soma(2)
console.log(somar(2))

const soma2 = (c) => (d) => c + d
console.log(soma2(2)(3))*/

function multiplicar(a) {
    return function(b) {
        return function(c) {
            return a * b * c
        }
    }
}
const multiplica = multiplicar(2)
const multiplica2 = multiplica(3)
const res = multiplica2(10)
console.log(res)

function cumprimentar(cumprimento) {
    return function(nome) {
        return `${cumprimento}, ${nome}`
    }
}

const cumprir = cumprimentar('oi')
console.log(cumprir('Rodinei'))

function data(dia) {
    return function(mes) {
        return function(ano) {
            console.log(`${dia}/${mes}/${ano}`)
        }
    }
}

const valor1 = data('03')
const valor2 = valor1('04')
const valor3 = valor2('2025')
data()

function somainfinita(valor) {
    return function(num) {
        if(num === undefined) {
            return valor
        }
        return somainfinita(valor += num)
    }
}

console.log(somainfinita(2)(3)())