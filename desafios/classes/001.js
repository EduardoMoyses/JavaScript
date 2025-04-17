class Personagem {
    constructor(nome, nivel, vida){
        this.nome = nome
        this.nivel = nivel
        this.vida = vida
    }

    status() {
        console.log(`Personagem: ${this.nome}, possui nível ${this.nivel} e ${this.vida} de vida.`)
    }
    atacar() {
        console.log(`${this.nome} atacou! o dano causado foi de ${this.getdano()}`)
    }

    getdano() {
        return 5000
    }
}

const persona = new Personagem('Cleverlei', 100, 5000)
console.log(persona)
persona.status()
persona.atacar()

class Guerreiro extends Personagem {
    constructor(nome, nivel, vida, forca) {
        super(nome, nivel, vida)
        this.forca = forca
    }

    getdano() {
        return this.forca
    }
}

class Mago extends Personagem {
    constructor(nome, nivel, vida,mana) {
        super(nome, nivel, vida)
        this.mana = mana
    }

    getdano() {
        return this.mana
    }
}

const guerreiro = new Guerreiro('Valdisnei', 78, 780, 500)
console.log(guerreiro)
guerreiro.status()
guerreiro.atacar()

const mago = new Mago('Rodinei Rodinaldo', 90, 900, 700)
console.log(mago)
mago.status()
mago.atacar()
