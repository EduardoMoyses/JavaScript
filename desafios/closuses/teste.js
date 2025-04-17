/*function init() {
    const nome = "Uma String"
    function mostrarnome() {
        console.log(nome)
    }
    mostrarnome()
}

init()*/

function init() { 
    const nome = "Uma String"
    function mostrarnome() {
        console.log(nome)
    }
    return mostrarnome
}

const minhafuncao = init()
minhafuncao() //TODO: Quando eu faço const minhafuncao = init(), eu executo init e armazeno o valor retornado por ela, que é a referência à função mostrarnome. E quando eu chamo minhafuncao(), aí sim eu executo mostrarnome, que estava retornada por init.

/*
function init() {
    const nome = "Uma String"
    function mostrarnome() {
        console.log(nome)
    }
    return mostrarnome
}

init()()
*/

function contador() {
    let contador = 0

    return function () {
        console.log(contador)
        contador++
    }
}

const contadora = contador()
contadora()
contadora()
contadora()
contadora()
contadora()

function soma(num1) {
    return (num2) => {
        if(!num2) {
            return num1
        }

        return soma(num1 + num2)
    }
}

console.log(soma(2)(5)(3)(10)(4)(-1)()) // currying