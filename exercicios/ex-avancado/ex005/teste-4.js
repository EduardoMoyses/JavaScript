/*
const objeto = {
    nome: "Darkman",
    metodo: function() {
        (function() {
            console.log(this.nome); // undefined
        })();
    }
};

objeto.metodo();
*/

const objeto = {
    nome: "Darkman",
    metodo: function() {
        (() => {
            console.log(this.nome) // darkman
        })()
    }
};

objeto.metodo()

