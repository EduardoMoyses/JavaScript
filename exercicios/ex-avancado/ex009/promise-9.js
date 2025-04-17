//  Arguments // TODO: OBS: só pode ser usado em funções normais

/*function somainfinitav1 () {
    const args = Array.from(arguments)
    let soma = 0
    for(let i = 0; i < args.length; i++) {
        soma += args[i]
    }
    return soma
}

console.log(somainfinitav1(1,2,3,4,5))*/

function somainfinitav2 () {
    const args = Array.from(arguments)
    
    return args.reduce((acumulador, valorAtual) => acumulador += valorAtual
    )
}

console.log(somainfinitav2(1,2,3,4,5))


