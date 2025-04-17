/*function multiplicar(a) {
    return (b) => {
        if (!b) {
            return a
        }

        return multiplicar(a * b)
    }
}
console.log(multiplicar(2)(4)())*/ //? closure e currying


/*function multiplicacao(a,b,c) {
    function conta ()  {
        return (a * b) ** c
    }
    return conta
}

const multiplicar = multiplicacao(2,3,2)
console.log(multiplicar())*/

const multiplicacao = (a,b,c) => () => (a*b)**c
const multiplicar = multiplicacao(2,3,2)
console.log(multiplicar())

function externa(nome) {
    return function interna() {
        return console.log(`Olá ${nome}, seja bem vindo!`)
    }
}

const res = externa('Adalberto')
res()

/*function tela(tema) {
    return function () {
        return console.log(tema)
    }
}

const result = tela('claro')
result()*/

function tela(tema = true) {
    return function () {
         tema = tema === 'escuro' ? 'claro' : 'escuro'
        console.log(tema)
    }
}

const result = tela()
result()
result()
result()

function heroi(nome) {
    return function atributos() {
        let poder
        switch (nome) {
            case 'homem-aranha':
                poder = 'poderes de aranha'
                break
            case 'superman':
                poder = 'tantos que é difícil de contar'
                break
            default: 'erro'
        }
        console.log(`O herói ${nome} tem ${poder}`)
    }
}

const superman = heroi('superman')
const spider = heroi('homem-aranha')
superman()
spider()