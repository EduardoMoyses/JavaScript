function valores (a,b,c, callback) {
    let total = a*b /c
    callback(total)
}

function Resultado(total) {
    if (total >= 10) {
       console.log(`Valor alto! O resultado final foi ${total}`)
    } else {
        console.log(`O resultado é pequeno: ${total}. Que tal tentar de novo?`)
    }
}

valores(5,8,1, Resultado)
valores(2,3,2, Resultado)