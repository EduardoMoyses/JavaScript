/*function atualizartarefa (nome,callback) {
    processamento(nome,callback)
}

function processamento (nome,callback) {
    if (nome == undefined || nome == null || nome == '') {
        console.error('ERRO: valor não atribuído!')
    } else {
        setTimeout(() => {callback(nome)},2000)
        
    }
}

function exibir(nome) {
    console.log(`Tarefa "${nome}" realizado com sucesso!`)
}

atualizartarefa('estudar JavaScript',exibir)*/

function atualizartarefa(nome, callback) {
    if (nome == undefined || nome == null || nome == '') {
        console.error('ERRO: valor não atribuído!')
    } else {
        setTimeout(() => {
            callback(nome)
        }, 2000)
    }
}

function exibir(nome) {
    console.log(`Tarefa "${nome}" realizada com sucesso!`)
}

atualizartarefa('estudar JavaScript', exibir)