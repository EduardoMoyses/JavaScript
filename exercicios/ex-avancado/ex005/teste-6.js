function cumprimento (nome, callback) {

    console.log("Olá " + nome)
    callback(nome)
}

function despedida(nome) {
        console.log('até mais! ' + nome) // a atribuição de nome como parametro torna possivel a personalização do texto
    }

cumprimento('darkman', despedida) // chamada + definição

// uso do callback