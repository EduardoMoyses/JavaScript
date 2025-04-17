const heroi = {
    nome: 'Qualquer um',
    poder: 'um poder qualquer',

    mostrarpoder: function () {
        console.log(this.poder)
    }
}

const flash = Object.create(heroi)
flash.poder = 'super velocidade'
flash.mostrarpoder()

const superman = {
    nome: 'superman',
    poder: 'voar'
}

Object.setPrototypeOf(superman, heroi)
superman.mostrarpoder()