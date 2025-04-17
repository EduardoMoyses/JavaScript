// Callback vs Promise


// ? callback

/*const statusPantera = ''

function emocional(callback, errocallback) {

    switch(statusPantera) {
        case 'feliz':
            callback({mensagem: 'feliz',})
            break
        case 'entediado':
            errocallback({mensagem: 'entediado',})
            break
        case 'triste': errocallback({mensagem: 'triste',})
            break
        default:
            errocallback({mensagem: 'emocionalmente indefinido'})

    }
}

emocional(
    (response) => console.log('Tudo certo, o gato está ' + response.mensagem),
    (error) => console.error('que pena, ele está ' + error.mensagem)
)*/

// * Promise

const statusPantera = 'feliz'

const emocional = new Promise((resolve, reject) => {
    switch(statusPantera) {
        case 'feliz':
            resolve({mensagem: 'feliz',})
            break
        case 'entediado':
            reject({mensagem: 'entediado',})
            break
        case 'triste': reject({mensagem: 'triste',})
            break
        default:
            reject({mensagem: 'emocionalmente indefinido'})
    }
})

emocional.then((response) => {
    console.log('no primeiro then')
    return {mensagem: `${response.mensagem}`}})

    .then((response) => {
        console.log('no segundo then')
        return {mensagem: 'o gato está ' + response.mensagem}})
    
    .then((response) => {
        console.log('no terceiro then')
        console.log('Tudo certo. ' + response.mensagem)
    })

    .catch((erro) => {console.error('que pena, ele está ' + error.mensagem)})