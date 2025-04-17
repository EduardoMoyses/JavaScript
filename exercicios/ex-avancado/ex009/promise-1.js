// promises

const umaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 1
    if (soma === 2) {
        resolve("tudo certo")
    } else {
        reject('deu ruim')
    }
})

console.log('esperando promise...')
umaPromessa.then((resultado) => {
    console.log(`valor do then: ${resultado}`)
}).catch((erro) => {
    console.error(`valor do catch: ${erro}`)
}).finally(() => {
    console.log('independente do resultado, eu sempre estarei aqui')
})

console.log('isso vai aparecer antes da promise')