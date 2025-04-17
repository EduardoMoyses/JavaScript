const animal = {
    som: 'um som de animal',
    tipo: "animal",
    emitirsom: function () {
        console.log(this.som)
    }
}

const gato = {
    som: 'miau miau',
    tipo: 'gato'
}

Object.setPrototypeOf(gato, animal)
gato.emitirsom()

const gatoraivoso = {
    tipo: 'gato raivoso',
    miarforte: function() {
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoraivoso, gato)
gatoraivoso.miarforte()