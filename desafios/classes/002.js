class Personagem {
    constructor(nome,idade,poder) {
        this.nome = nome
        this.idade = idade
        this.poder = poder
    }

    intro() {
        console.log(`O personagem ${this.nome} tem ${this.idade} anos e seu poder é ${this.poder}`)
    }
}

const personagem = new Personagem('Beto',42,'super-força')
personagem.intro()

class Heroi extends Personagem {
    constructor (nome,idade,poder) {
        super(nome,idade,poder)
    }
}

const heroi = new Heroi('flash', 21, 'super-velocidade')
heroi.intro()

class AntiHeroi extends Personagem {
    constructor(nome,idade,poder){
        super(nome,idade,poder)
    }
}

const antiheroi = new AntiHeroi('Deadpool',41,'imortalidade')
antiheroi.intro()