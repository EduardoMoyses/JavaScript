// Herança de classes

class Dev {
    constructor (nome, idade, linguagem, tipodedev) {
        this.nome = nome
        this.idade = idade
        this.linguagem = linguagem
        this.tipodedev = tipodedev
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} tenho ${this.idade} anos, domino ${this.linguagem}, sou ${this.tipodedev}`)
    }
}

const dev = new Dev("pedro", 25, "front-end e back-end", "fullstack")
console.log(dev)
dev.saudacao()

class frontend extends Dev {
    constructor (nome, idade, linguagem,tipodedev, framework) {
        super(nome, idade, linguagem, tipodedev)
        this.framework = framework
    }
}

class backend extends Dev {
    constructor (nome, idade, linguagem, tipodedev, bancodedados ) {
        super(nome, idade, linguagem, tipodedev)
        this.bancodedados = bancodedados
    }
}

const Frontend = new frontend("adamastor", 30, "Javascript", "front-end", "react")
const Backend = new backend("Rodinei", 37, "c#", "back-end", "SQL, server")

console.log(Frontend)
Frontend.saudacao()

console.log(Backend)
Backend.saudacao()