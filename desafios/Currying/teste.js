/*

let resultado

function ehmaior(a,b) {
    return a > b
}

resultado = ehmaior(2,5)

console.log(resultado)

*/

let res

function ehmaiorCurrying(a) {
    let result
    return function ehmaiorCurrying2(b) {
        if (!b) {
            return result
        }
        result = a > b
        a = b
        return ehmaiorCurrying2
    }
    
}

res = ehmaiorCurrying(2)(5)(1)()

console.log(res)

function soma(num1) {
    let acumulador = num1
    return function soma2(num2) {
        if (!num2) {
            return acumulador
        }
        acumulador += num2
        return soma2
    }
}

const resultado = soma(2)(3)(5)(10)(4)(-1)()
console.log(resultado)