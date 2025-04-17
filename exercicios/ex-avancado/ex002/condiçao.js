
function calcular() {
    var tn1 = window.document.getElementById('n1')
    var tn2 = window.document.getElementById('n2')
    var res = window.document.getElementById('res')
    var operacao = window.document.getElementById('operacao').value
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var resultado
    var simbolo

    if (tn1.value.length === 0 || tn2.value.length === 0) {
        res.innerHTML = 'ERRO: Operação inválida!';
        return; 
    }

    switch (operacao) {
        case 'somar':
            resultado = n1 + n2
            simbolo = '+'
            break
        case 'subtrair':    
            resultado = n1 - n2
            simbolo = '-'
            break
        case 'multiplicar':
            resultado = n1 * n2
            simbolo = 'x'
            break
        case 'dividir':
            if (n2 !== 0) {
                resultado = n1/n2
                simbolo = '/'
            } else {
                res.innerHTML = 'ERRO: Divisão por zero!';
                return
            } break
             default:
            res.innerHTML = 'ERRO: Operação inválida!';
            return
    }

    res.innerHTML = `O resultado de ${n1} ${simbolo} ${n2} é igual a ${resultado}.`

    /*
    if (operacao === 'somar') {
        resultado = n1 + n2
        simbolo = "+"
    } else if (operacao === 'subtrair'){
       resultado = n1 - n2
        simbolo = "-"
    } else if (operacao === 'multiplicar') {
        resultado = n1 * n2
        simbolo = "x"
    } else if (operacao === 'dividir') {
       
       if (n2 !== 0) {
        resultado = n1 / n2
        simbolo = "/"
       } else {
            resultado = 'ERRO: divisão por zero!'
        }
    } else {
        resultado = 'ERRO: operacao invalida!'
    }

    if (resultado === 'ERRO: divisão por zero!' || resultado === 'ERRO: operação inválida!') {
        res.innerHTML = resultado
    } else {
        res.innerHTML = `O resultado de ${n1} ${simbolo} ${n2} é igual a ${resultado}.`
    }
  */
}

