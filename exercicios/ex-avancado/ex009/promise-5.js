const cincomil = () => new Promise((resolve,reject) => {
    setTimeout(() => resolve('promise cincomil resolvida.'), 5000)
})

const mil = () => new Promise((resolve,reject) => {
    setTimeout(() => reject('promise mil resolvida.'), 1000)
})

const resolvedoradepromiseassincronas = async () => {
    const resultado1 = await cincomil().then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        console.log(err)
    })
    console.log('código aqui 1')
    const resultado2 = await mil().then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })

    console.log(`mensagem: ${resultado1}\n ${resultado2}` )
}

resolvedoradepromiseassincronas()