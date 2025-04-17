/*
function soma() {
    let valores = 0
    for(let i = 0; i < arguments.length; i++) {
        valores += arguments[i]
    }

    return valores
}

console.log(somartudo(1,2,3,4))

----------------------------------------------------------------------------------------------------------------------

function numeros() {
    console.log(arguments[0])
    console.log(arguments[1])
}

----------------------------------------------------------------------------------------------------------------------

function soma() {
    let args = Array.from(arguments)
    args.reduce((acc, val) => acc + val,0)
}

console.log(soma(1,2,3,4,5,6))


----------------------------------------------------------------------------------------------------------------------

function soma(...args) {
    args.reduce((acc,val) => acc += val)
}

OU

const multiplicacao = (multiplicador,...args) => {
    
    return args.map((num) => multiplicador * num)
}

console.log(multiplicacao(2,1,2,4,8,5))
*/