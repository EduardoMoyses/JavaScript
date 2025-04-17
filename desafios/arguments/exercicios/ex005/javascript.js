function somar() {
    const args = Array.from(arguments)
    return args.reduce((acc,valor) => acc + valor,0 )
}

console.log(somar(1,2,3,4))