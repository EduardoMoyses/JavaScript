function valornome (nome,callback) {
    callback(nome)
}

function valoridade (idade,callback) {
    callback(idade)
}

function res (nome,idade) {
    console.log(`Olá eu sou ${nome}, e tenho ${idade} anos.`)
}

valornome('rodinei',function(nome) {
    valoridade(23, function(idade) {
        res(nome,idade)
    })
})