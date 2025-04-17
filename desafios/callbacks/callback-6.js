function fazerpedido (pedido,callback) {
    console.log(`Preparando pedido! ${pedido}`)
    setTimeout(() => {
        console.log(`Pedido pronto ${pedido}`)
        callback(pedido)
    },2000)
    
}

function pedidopronto (pedido) {
    setTimeout(() => console.log(`enviando pedido ${pedido}`), 3000)
}

fazerpedido('espaguete', pedidopronto)