/*class Personagem {
    constructor(nome, energia) {
        this.nome = nome;
        this.energia = energia;
    }

    atacar() {
        console.log(`${this.nome} atacou!`);
        this.energia -= 10;
    }
}

const heroi = new Personagem("Darkman", 100);
heroi.atacar();
console.log(heroi.energia); */

class Personagem {
    constructor(nome, energia) {
        this.nome = nome;
        this.energia = energia;
    }

    atacar() {
        console.log(`${this.nome} atacou!`);
        this.energia -= 10;
        console.log(`energia restante ${this.energia}/100`)
    }
}

const heroi = new Personagem("Darkman", 100);
heroi.atacar();