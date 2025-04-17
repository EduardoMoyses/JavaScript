const botao = document.getElementById('botao')
const mensagem = document.getElementById('mensagem')

botao.addEventListener('click', () => {
    iniciarcompra('cliente', function(nome) {
        dados(nome,'cenoura', 'chocolate', 'carne', function (nome,itens) {
            mensagem.innerHTML = `Obrigado ${nome} por comprar os itens ${itens.join(',')} em nossa loja!`
        })
    })
})

function iniciarcompra(nome,callback) {
    nome = 'Rodinei'
    callback(nome)
}

function dados(nome,item1,item2,item3,callback) {
    const itens = [item1,item2,item3]
     callback(nome,itens)
}