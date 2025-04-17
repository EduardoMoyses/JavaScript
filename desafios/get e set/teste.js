//? Getters e Setters

const obj = {
    lista: ['oi','olá', 'hello'],
    get primeiraString() {
        return this.lista.length ? this.lista[0] : null
    },
    set primeiraString(item) {
        this.lista.unshift(item)
    },
}

console.log(obj.primeiraString)
obj.primeiraString = 'hi'
// delete obj.primeiraString
console.log(obj.primeiraString)

// TODO:--------------------------------------------------------------------------------------------------------------

const OBJ = {a: 0}

Object.defineProperty(OBJ,'prop',{
    get() {
        return this.a
    },

    set(x) {
        this.a = x
    },
})

console.log(OBJ.prop)
OBJ.prop = 5
console.log(OBJ.prop)

//--------------------------------------------------------------------------------------------------------------------

const STR = 'computada'

const OBS = {
    a: 'abc',
    get [STR]() {
        return this.a
    },
    set [STR](novovalor) {
        this.a = novovalor
    }
}

console.log(OBS.computada)
OBS.computada = 'adjid'
console.log(OBS.computada)