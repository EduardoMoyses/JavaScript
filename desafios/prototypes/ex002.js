const profissao = {
    tipo: 'defina sua profissão',
    mostrarprofissao: function () {
        console.log(this.tipo)
    }
}

const empresario = Object.create(profissao)
empresario.tipo = 'empresário'
empresario.mostrarprofissao()

const frontEnd = {
    tipo: 'front-end'
}

Object.setPrototypeOf(frontEnd, profissao)
frontEnd.mostrarprofissao()