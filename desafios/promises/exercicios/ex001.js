const teste = new Promise((resolve, reject) => {
    let numeros = 1 + 1
    if (numeros === 2) {
        resolve('operação concluída')
    } else {
        reject('operação não foi concluída')
    }
})

teste

.then((resultado) => {
    console.log('sucesso:', resultado)
})
.catch((erro) => {
    console.log('fracasso:', erro)
})