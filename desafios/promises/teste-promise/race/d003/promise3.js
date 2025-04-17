const botao = document.getElementById('botao')
const mensagem = document.getElementById('mensagem')

botao.addEventListener('click', function () {
    const teste = new Promise((resolve,reject) => {
    let somar = 5 + 5
    if (somar === 10) {
        resolve('resolvido')
    } else {
        reject('rejeitado')
    }
})

teste.then((resultado) => {
    mensagem.textContent = resultado
}).catch((erro) => {
    mensagem.textContent = erro
})
})

