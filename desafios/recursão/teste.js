/*let soma = 0

for (let i = 1; i <= 5; i++) {
    soma += i
}

console.log(soma)*/


function somarecursiva(n) {
    if (n == 1) {
        return 1
    }
    return n + somarecursiva(n-1)
    }

console.log(somarecursiva(5))

/*------------------------------------------------------------------------------------------------------------------*/

function timeout(numero) {
    return new Promise((resolve) => setTimeout(() => resolve(numero), 1000)) 
}

 async function contagemregressiva(numero) {
    if (numero <= 0) {
        return console.log("Feliz ano novo!")
    }

    console.log(await timeout(numero))

    return contagemregressiva(numero - 1)
}
contagemregressiva(5)

/*------------------------------------------------------------------------------------------------------------------*/
function fatorial(n) {
    if(n === 1) {
        return 1
    }
    return n * fatorial(n - 1)
}
console.log((fatorial(5)))