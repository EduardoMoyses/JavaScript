function calculo (a, b, operacao, callback) {
    let resultado

    if (operacao === 'soma') {
        resultado = a + b
    } else if (operacao === 'subtracao') {
        resultado = a - b
    } else if (operacao === 'multiplicacao') {
        resultado = a * b
    } else if (operacao === 'divisao') {
        resultado = a / b
    } else {
         console.log('resultado inválido. Determine valores.')
         return
    }

    callback(resultado)
}

function res(resultado) {
    if (resultado < 0) {
        console.log(`O resultado é negativo: ${resultado}. Algo deu errado?`)
    } else if (resultado === 0) {
        console.log("O resultado foi exatamente zero! Que curioso.")
    } else {
        console.log(`Resultado positivo: ${resultado}. Ótimo trabalho!`)
    }
}

calculo(-2,2, 'soma', res)
calculo(5,6, 'subtracao', res)
calculo(5,2, 'multiplicacao', res)
calculo(5,5, 'divisao', res)
