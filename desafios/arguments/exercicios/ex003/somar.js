function numeros() {
    console.log(arguments[0])
    console.log(arguments[1])
}

numeros(100,200)

function somartudo() {
    let valor = 0
    for(let i = 0; i < arguments.length; i++) {
        valor += arguments[i]
    }
    return valor
}

console.log(somartudo(1,2,3,4))

function somartudov2() {
    const args = Array.from(arguments)
    return args.reduce((acc,val) => acc + val,0 )
}

console.log(somartudov2(1,2,3,4,5))