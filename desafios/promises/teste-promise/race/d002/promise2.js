const botao = document.getElementById('botao')
const res = document.getElementById('dados-1')

botao.addEventListener('click', function () {

    res.textContent = 'carregando...'

    Promise.race([
    new Promise((_,reject) => {
        setTimeout(() => {
        reject('ops...falhou1')
    },8000)}),

    new Promise((_,reject) => {setTimeout(() => {
        reject('ops...falhou2')
    },5000)}),
    new Promise((resolve) => {setTimeout(() => {
        resolve('Resolvido!!')
    },3000)})
])

.then((resultado) => {
    res.textContent = resultado
})

.catch((erro) => {
    res.textContent = erro
})
})