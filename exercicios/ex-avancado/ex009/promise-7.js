//? try/ catch

/*const main = () => {
    try {
        codigo
    } catch (error) {
        console.error(`deu erro no código e o erro é esse: \n\n${error}`)
    }
    
}

main()*/

// TODO: Níveis de try / catch

const funcao1 = () => {
    console.log('Sou função1')
    const valor = true
    try {
        if (valor) {
            throw new Error('Deu erro no valor')
        }
    } catch (error) {
        console.error(error)
    }
    throw error
}

const funcao2 = () => {
    console.log('Sou função2')

   asdf
}


const main = () => {
   try {
        funcao1()
        funcao2()
        
   } catch (error) {
        console.log(error)
   } 
    console.log('passou por aqui')
}

main()