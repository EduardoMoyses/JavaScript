const obj = {
    contador: 0,

    get valorobj() {
        return this.contador
    },

    set valorobj(num) {
        return this.contador += num
    }
}

console.log(obj.valorobj)
obj.valorobj = 5
console.log(obj.valorobj)
obj.valorobj = 10
console.log(obj.valorobj)

const nomecompleto = {
    primeironome: 'Rodinei',
    ultimonome: 'Rodinaldo',

    get completo() {
        return `${this.primeironome} ${this.ultimonome}`
    },

    set completo(novonome) {
        const partes = novonome.split(' ')
        this.primeironome = partes[0]
        this.ultimonome = partes.slice(1).join(' ')
    }
}

console.log(nomecompleto.completo)
nomecompleto.completo = 'cleverlei cleverlinho silva'
console.log(nomecompleto.completo)

const produto = {
    precobruto: 1200,
    desconto: 10,

    get valordoproduto() {
        const precofinal = this.precobruto - (this.precobruto * this.desconto / 100)
        return precofinal.toLocaleString('PT-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    },

    set valordoproduto(novovalor) {
        this.precobruto = novovalor
    }
}

console.log(produto.valordoproduto)
produto.valordoproduto = 1500
console.log(produto.valordoproduto)

const listas = {
    lista: ['estudar','comer','dormir'],

    get valorlista() {
        return this.lista.join(',')
    },

    set valorlista(novalista) {
        this.lista = novalista.split(',').map(lista =>lista.trim())
    }
}

console.log(listas.valorlista)
listas.valorlista = 'andar,correr,beber'
console.log(listas.valorlista)