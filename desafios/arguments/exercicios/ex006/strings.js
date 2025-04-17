function FiltrarStrings() {
    let resultado = []
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            resultado.push(arguments[i])
        }
        
    }
    return resultado 
}

console.log(FiltrarStrings(1,2,'oi',4,'quatro'))