/*const numero1 = Promise.resolve(1)
const numero2 = Promise.resolve(2)
const numero3 = Promise.reject(3)

Promise.all([numero1, numero2,numero3]) //? aguarda todas as promises serem resolvidas, mas se 1 de errado ele rejeita e mostra só o erro.

.then((resultado) => {
    console.log(resultado)
})
.catch((erro) => {
    console.log(erro)
})*/

const numero1 = Promise.resolve(1)
const numero2 = Promise.resolve(2)
const numero3 = Promise.reject(3)

Promise.allSettled([numero1, numero2,numero3]) // Aguarda todas as Promises terminarem, independentemente de serem resolvidas ou rejeitadas.
// Retorna um array com o estado de cada Promise (fulfilled ou rejected).

.then((resultado) => {
    console.log(resultado)
})
.catch((erro) => {
    console.log(erro)
})

