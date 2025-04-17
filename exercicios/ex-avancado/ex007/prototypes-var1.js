// caso tenha um emitirsom() na const gato, ele pegará ai msm

const animal = {
    som: 'um som de animal',
    tipo: "animal",
    emitirsom: function () {
        console.log(this.som)
    }
}

const gato = {
    som: 'miau',
    tipo: 'gato',
    emitirsom: function() {
        console.log('miau' + ' miau')
    }
}

Object.setPrototypeOf(gato, animal)
gato.emitirsom()

/*
    const animal = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirsom: function() {
        console.log(this.som)
    }
 }
 const gato = Object.create(animal)
    som = 'miau',
    tipo = 'gato'
    gato.emitirsom = function() {
    console.log('miau' + ' miau')
 }
 gato.emitirsom()

*/