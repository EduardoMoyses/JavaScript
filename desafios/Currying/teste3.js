function soma(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(soma(2)(1)(2))

function multiplicar(num1) {
    total = num1
    return function(num2) {
        if (!num2) {
            return total
        }
        return total += num2
    }
}

console.log(multiplicar(2)(10))

/*
function multiplicar(num1) {
    return function(num2) {
        if (!num2) {
            return num1
        }
        return multiplicar(num1 + num2)
    }
}

console.log(multiplicar(2)(10)())
*/

function saudacao(cumprimento) {
    return function(nome) {
        console.log(`${cumprimento}, ${nome}`)
    }
}

saudacao('oi')('rodinei')

function saudacao2(cumprimento2) {
    return function(nome2) {
        return console.log(`${cumprimento2}, ${nome2}`)
    }
}

saudacao2('hi')('adamastor')

function somartudo(a) {
    return function(b) {
        if(!b) {
            return a
        }
        return somartudo(a + b)
    }
}

console.log(somartudo(2)(3)(10)(-13)(22)())