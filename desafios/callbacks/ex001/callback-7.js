const botao = document.getElementById('botao')
const mensagem = document.getElementById('mensagem')
const pedido = document.getElementById('pedido')

botao.addEventListener('click', function () {
    fazerpedido(pedido.value, receberpedido)
})

function fazerpedido(pedido,callback) {
    mensagem.innerHTML = `Recebemos seu pedido: ${pedido}. Iniciando preparo...`
    setTimeout(() => callback(pedido,entregarpedido),2000)
}

function receberpedido (pedido,callback) {
    mensagem.innerHTML = `O pedido ${pedido} está sendo preparado...`
    setTimeout(() => callback(pedido),3000)
}

function entregarpedido(pedido) {
    setTimeout(() => mensagem.innerHTML = `Seu pedido está sendo enviado. Seu pedido é ${pedido}`,500)
}