// Try / Catch Aninhado

const funcao1 = () => {
    
}

const funcao2 = () => {
    
}

const funcao3 = () => {
    
}

const main = () => {
   try {
    try {
        try {
            try {
                throw new Error('Deu erro na função3')
            } catch (error) {
                console.error(error)
                throw error
            }
        } catch (error) {
            console.error(error)
            throw error
        }
    } catch (error) {
        console.error(error)
        throw error
    }
   } catch (error) {
        console.log(error)
   } 
    console.log('passou por aqui')
}

main()

/*const funcao1 = () => {
    try {
        funcao2()
    } catch (error) {
        console.error(error)
        throw error
    }
}

const funcao2 = () => {
    try {
        funcao3()
    } catch (error) {
        console.error(error)
        throw error
    }
}

const funcao3 = () => {
    try {
        throw new Error('Deu erro na função3')
    } catch (error) {
        console.error(error)
        throw error
    }
}

const main = () => {
   try {
        funcao1()
   } catch (error) {
        console.log(error)
   } 
    console.log('passou por aqui')
}

main()*/

//! NÃO USE ANINHAMENTO DE TRY CATCH