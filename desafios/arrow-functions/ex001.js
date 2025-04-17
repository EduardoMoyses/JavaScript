const somar = (a,b) => a + b
const subtrair = (a,b) => a - b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b

const executar = (a,b,operacao) => {
    let resultado
    switch (operacao) {
        case 'somar':
            resultado = somar(a,b)
            break
        case 'subtrair':
            resultado = subtrair(a,b)
            break
        case 'multiplicar':
            resultado = multiplicar(a,b)
            break
        case 'dividir':
            resultado = dividir(a,b)
            break
        default:
            console.log('Operação inválida');
            return;

    }

    console.log(`O resultado da operação ${operacao} entre ${a} e ${b} é: ${resultado}`)
}

executar(10,5, 'somar')
executar(10,5, 'subtrair')
executar(10,5, 'multiplicar')
executar(10,5, 'dividir')