const botao = document.getElementById('botao')


botao.addEventListener('click', () => {
    const dados1 = new Promise((resolve,reject) => {
        let conta = 1 + 2
        if (conta === 2) {
            resolve('conta resolvida a resposta é ' + conta)
        } else {
            reject('a conta falhou!')
        }
    })
    
    dados1.then((resultado) => {
        document.getElementById('dados-1').textContent = resultado
    })
    .catch((error) => {
        document.getElementById('dados-1').textContent = error
    })    
})
