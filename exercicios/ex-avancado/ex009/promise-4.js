//  Async / Await

const cincomil = () => new Promise((resolve,reject) => {
    setTimeout(() => resolve('promise cincomil resolvida.'), 5000)
})

const mil = () => new Promise((resolve,reject) => {
    setTimeout(() => resolve('promise mil resolvida.'), 1000)
})

const quinhentos = () => new Promise((resolve,reject) => {
    setTimeout(() => resolve('promise quinhentos resolvida.'), 500)
})

const cem = () => new Promise((resolve,reject) => {
    setTimeout(() => resolve('promise cem resolvida.'), 100)
})

const resolvedoradepromiseassincronas = async () => {
    const resultado1 = await cincomil()
    console.log('código aqui 1')
    console.log('código aqui 2')
    console.log('código aqui 3')
    const resultado2 = await mil()
    console.log('código aqui 4')
    const resultado3 = await quinhentos()
    console.log('código aqui 5')
    const resultado4 = await cem()

    console.log(`mensagem: ${resultado1}\n ${resultado2}\n ${resultado3}\n ${resultado4}` )
}

resolvedoradepromiseassincronas()