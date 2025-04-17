// const numeros = (n1,n2,n3) => {
    // return n1 + n2 + n3
// }

// console.log(numeros(1,2,3))

//? arguments não é usado com arrow function

/*function somainfinitaV1() {
    const args = Array.from(arguments)
    let soma = 0

    for(let i = 0; i < args.length; i++) {
        soma += args[i]
    }

    return soma
}

console.log(somainfinitaV1(1,2,3,4,5))*/

function somainfinitaV2(args) {
    
    return args.reduce((acumulador,valoratual) => acumulador += valoratual)
}

console.log(somainfinitaV2([1,2,3,4,5]))