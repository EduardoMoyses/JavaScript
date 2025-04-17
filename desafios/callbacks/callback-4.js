function calculo (a, b, operacao, callback) {
    let resultado

    switch (operacao) {
        case 'soma':
            resultado = a + b
            break
        case 'subtracao':
            resultado = a - b
            break
        case 'multiplicacao':
            resultado = a * b
            break
        case 'divisao':
            resultado = a / b
            break
    }

    callback(resultado)
}

function res(resultado) {
    if (resultado < 0) {
        console.log(`O resultado é negativo: ${resultado}. Algo deu errado?`)
    } else if (resultado === 0) {
        console.log(`seu resultado foi ${resultado}, Que curioso!.`)
    } else {
        console.log(`Resultado positivo: ${resultado}. Ótimo trabalho!`)
    }
}

calculo(-2,2, 'soma', res)
calculo(5,6, 'subtracao', res)
calculo(5,2, 'multiplicacao', res)
calculo(5,5, 'divisao', res)


/* o callback é uma ponte que permite que uma função tenha acesso a suas informações de outra mas para usa-las é preciso chama-las quando chamei o callback e defini nos () o resultado e no fim disse que callback era = res ali criei a ponte mas não chamei ainda na função res para isso põe nos () o resultado e agr ele atravessou.*/