// herança sem usar classes

const Dev = function(nome, idade, linguagem, tipodedev) {
    this.nome = nome
    this.idade = idade
    this.linguagem = linguagem
    this.tipodedev = tipodedev

    this.saudacao = function () {
        console.log(`Olá, meu nome é ${this.nome} tenho ${this.idade} anos, domino ${this.linguagem}, sou ${this.tipodedev}`)
    }
}

const dev = new Dev("pedro", 25, "front-end e back-end", "fullstack")
console.log(dev)
dev.saudacao()

const frontend = function(nome, idade, linguagem, framework) {
    const newDev = new Dev(nome, idade, linguagem,'front-end')
    newDev.framework = framework
    Object.setPrototypeOf(this, newDev)
}

const backend = function(nome, idade, linguagem, bancodedados) {
    const newDev = new Dev(nome, idade, linguagem,'back-end')
    newDev.bancodedados = bancodedados
    Object.setPrototypeOf(this, newDev)
}

const Frontend = new frontend("adamastor", 30, "Javascript", "react")
const Backend = new backend("Rodinei", 37, "c#", "SQL, server")

console.log(Frontend)
Frontend.saudacao()

console.log(Backend)
Backend.saudacao()