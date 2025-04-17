// function somainfinitaV2(...args) {
    // return args.reduce((acumulador,valoratual) => acumulador += valoratual)
// }

// console.log(somainfinitaV2(1,2,3,4,5))

const multiplicacao = (multiplicador,...args) => {
    
    return args.map((num) => multiplicador * num)
}

console.log(multiplicacao(2,1,2,4,8,5))