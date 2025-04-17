class usuario {
    #primeironome = 'Brazilian' // propriedade privada(# no inicio)
    #segundonome = 'Dev' // propriedade privada(# no inicio)

    get nomecompleto() {
       return `${this.#primeironome} ${this.#segundonome}`
    }

    set nomecompleto(valor) {
        [this.#primeironome, this.#segundonome] = valor.split(' ')
    }
}

const usu = new usuario()
console.log(usu.nomecompleto)
usu.nomecompleto = 'Paulo Raoni 1234'
console.log(usu.nomecompleto)


class Teste {
    static #strinterna = 'uma string teste'
    static get str() {
        return this.#strinterna
    }

    static set str(valor) {
        this.#strinterna = valor
    }
}

console.log(Teste.str)
Teste.str = 'teste de string'
console.log(Teste.str)