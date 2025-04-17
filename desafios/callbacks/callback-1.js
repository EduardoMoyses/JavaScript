/*
function dados (nome, callback) {
    callback(nome)
}

function resultado (nome){
    console.log('Olá', nome)
}

dados('adamastor', resultado)
*/

function numeros (a,b,c,d,e, callback) {
    let resultado = b + c * a / e ** d
    callback(resultado)
}

function valor(resultado) {
    console.log(resultado)
}

numeros(2,5,22,3,5, valor)